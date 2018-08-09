import {DATA} from './DATA.js'

const getData = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(DATA)
        }, 1000)
    })
    
}

export {getData}