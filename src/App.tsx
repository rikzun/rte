import './App.style.sass'
import {InputField} from "./components/InputField";
import {useEffect, useMemo, useState} from "react";
import {getIndex, getMod} from "./utils/numbers";

export function App() {
    const [state, setState] = useState('')
    const [firstWord, setFirstWord] = useState('')

    useEffect(() => {
        setFirstWord(state.split(' ')[0].trimEnd())
    }, [state])

    const mod = useMemo(() => {
        if (!firstWord) return null
        return getMod(firstWord)
    }, [firstWord])

    const indexes = (() => {
        const arr: number[] = []
        if (mod == null || !state) return arr

        for (let i = 0; (arr[arr.length - 1] ?? 0) < state.length + 100; i++) {
            const index = getIndex(mod, i)
            const previous = arr[arr.length - 1] ?? 0

            arr.push(index + previous)
        }

        return arr
    })()

    return (
        <div className="container">
            <InputField
                value={state}
                onChange={(v) => setState(v)}
                indexes={indexes}
            />

            <div className="output">
                {indexes.map((v) => state[v])}
            </div>
        </div>
    )
}