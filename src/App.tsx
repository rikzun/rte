import './App.style.scss'
import { InputField } from "@components/InputField"
import { getIndex, getMod } from "./cypher"
import { useStorage } from '@utils/react'

export function App() {
    const input = useStorage('')
    const mod = getMod(input.value.split(' ')[0].trimEnd())

    const indexes = (() => {
        const arr: number[] = []
        if (mod == null || !input.value) return arr

        for (let i = 0; (arr[arr.length - 1] ?? 0) < input.value.length + 100; i++) {
            const index = getIndex(mod, i)
            const previous = arr[arr.length - 1] ?? 0

            arr.push(index + previous)
        }

        return arr
    })()

    return (
        <div className="container">
            <InputField
                value={input.value}
                onChange={input.set}
                indexes={indexes}
            />

            <div className="output">
                {indexes.map((v) => input.value[v])}
            </div>
        </div>
    )
}