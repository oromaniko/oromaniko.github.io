export const makeArray = (count: number, offset: number): number[] => {
    const pageCount = Math.ceil(count / offset)
    const arr = new Array(pageCount)
    for (let i = 0; i < pageCount; i += 1) {
        arr[i] = i + 1
    }
    return arr
}

export const getDate = (createdAt: string) => {
    const date = new Date(createdAt)
    return date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
    })
}

export const validateEmail = (email: string) => {
    return email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}
