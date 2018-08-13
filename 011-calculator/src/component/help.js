

const operationMinus = (a, b) => {
    return a - b
}

const operationPlus = (a, b) => {
    return a + b
}

const operationMultiple = (a, b) => {
    return a * b
}

const operationDivide = (a, b) => {
    return a / b
}



/*
 '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '0': '0',
 */


export const mapper = (op) => {
    let  schema = {
        'CE': '0',
        '*': (a, b) => {
            return a * b
        },
        '-': (a, b) => {
            return a - b
        },
        '/': (a, b) => {
            return a / b
        },
        '+': (a, b) => {
            return a + b
        },
    }
    
    return schema[op]
}

