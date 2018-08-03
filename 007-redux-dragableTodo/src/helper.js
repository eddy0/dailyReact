const generateId = () => {
    return Math.random().toString(32).substring(2) + new Date().getTime().toString(32)
}

const fetchTodo = () => {
    let todo = [
        {
            id: 'kq4q0k1fmq81cjv64qvc',
            task: 'iifj',
            done: false,
            order: 1,
        },
        {
            id: '2vki3qlcfpo1cjv6u559',
            task: 'heuv',
            done: false,
            order: 2,
        },
        {
            id: '4mdhsuk20rg1cjv6ulf2',
            task: 'pkbu',
            done: false,
            order: 3,
        },
    ]
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(todo)
        },1000)
    })
}


export {
    fetchTodo,
    generateId,
}