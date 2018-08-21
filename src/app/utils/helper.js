const toArray = (object) => {
    if (object) {
        return Object.entries(object).map(([id, value]) => {
                return {
                    ...value,
                    id,
                }
        })
    }
}

export {
    toArray,
}