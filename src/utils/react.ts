import { Dispatch, SetStateAction, useState } from "react"

export interface UseState<T> {
    value: T
    set: Dispatch<SetStateAction<T>>
}

export function useStorage <T>(value: T): UseState<T> {
    const [state, setState] = useState(value)
    return { value: state, set: setState }
}