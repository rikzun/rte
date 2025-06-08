import { ClipboardEvent, FormEvent, ReactNode, useMemo } from "react"
import './InputFIeld.style.sass'

interface InputFieldProps {
    value: string
    onChange: (value: string) => void
    indexes: number[]
}

export function InputField({value, onChange, indexes}: InputFieldProps) {
    const onInput = (e: FormEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        onChange(target.outerText)
    }

    const onPaste = (e: ClipboardEvent<HTMLDivElement>) => {
        e.preventDefault()

        const target = e.target as HTMLDivElement
        const text = e.clipboardData.getData("text/plain")

        target.innerText = text
        onChange(text)
    }

    const letters = useMemo(() => {
        const lastIndex = indexes[indexes.length -1]
        if (!lastIndex) return []

        const arr: ReactNode[] = []
        const lt = value.split('')

        for (let i = 0; i <= lastIndex; i++) {
            const currentLt = lt[i]
            const props = {
                key: i,
                className: indexes.includes(i) ? 'tt' : ''
            }

            switch (currentLt) {
                case '\n': arr.push(<br {...props} />); break
                default: arr.push(<span {...props}>a</span>); break
            }
        }

        return arr
    }, [value, indexes])

    return (
        <div className="input-container">
            <div
                className="input-field"
                onInput={onInput}
                onPaste={onPaste}
                contentEditable
                spellCheck={false}
            />

            <div className="overlay">
                {letters}
            </div>
        </div>
    )
}