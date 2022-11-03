export function getMod(word: string) {
    const sum = [...word].reduce((acc, v) => {
        acc += v.codePointAt(0)!
        return acc
    }, 0)

    return Math.log(sum) * sum >>> 0 << 2
}

export function getIndex(mod: number, index: number) {
    const a = mod + (index + 1) >>> 0|0
    const b = a << Math.PI >>> 0|0
    const c = a >> b >> 9 >>> 0|0
    const final = String(a + b + c)

    const num = Number(final[final.length - 1])
    return num|1
}