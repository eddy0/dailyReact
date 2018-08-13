import React from 'react'
import {mapper} from './help'

const log = console.log.bind(console)

const sumArray = (array) => {
    let n = ''
    for (let i = 0; i < array.length; i++) {
        n += array[i]
    }
    return Number(n)
}

const parseProcess = (process) => {
    let sum = []
    let factor = []
    let op = []
    while(process.length > 0) {
        let item = process.shift()
        if ('+-*/'.indexOf(item) === -1) {
            if (factor.length < 0) {
                factor = [item]
            } else {
                factor.push(item)
              
            }
        } else {
            op.push(item)
            let n = sumArray(factor)
            sum = [...sum, n]
            factor = []
        }
    }
    if (factor.length > 0) {
        let n = sumArray(factor)
        sum = [...sum, n]
    }
    return [sum, op]
}

class App extends React.Component {
    state = {
        process: [],
        result: 0,
    }
    
    componentDidMount() {
         window.addEventListener('keypress', (event) => {
            let map = '.0123456789/*-+='
            let key = event.key
            if (key === 'Enter') {
                key = '='
            }
            if (map.indexOf(key) !== -1 ) {
                this.operate(key)
            }
        })
    }
    
    operate = (operation) => {
        if (operation === 'CE') {
            this.setState({
                process: [],
                result: 0,
            })
        } else if (operation === '=') {
            let [sum, op] = parseProcess(this.state.process)
            let result = sum.reduce((a, b) => {
                let operator = op.shift()
                return mapper(operator)(a, b)
            })
            if (result % 1 !== 0 ) {
                result = result.toFixed(2)
            }
    
            this.setState({
                process: [],
                result: result,
            })
        } else {
            this.setState((prevState) => {
                let p = prevState.process
                if (p.length === 0) {
                    p = [operation]
                } else {
                    let last = p.slice(-1)[0]
                    if ( '+-*/'.indexOf(operation) !== -1 && '+-*/'.indexOf(last) !== -1) {
                        p[p.length - 1] = operation
                    } else {
                        p.push(operation)
                    }
                }
                return {
                    process: p,
                }
            })
        }
    }
    
    render() {
        let process = ''
        for (let i = 0; i < this.state.process.length; i++) {
            let item = this.state.process[i]
            process += item
        }
        log(process)
        return (
            <div className='grid'>
                <div className="process">{process}</div>
                <div className=" result">{this.state.result}</div>
                <div onClick={() => this.operate('CE')} className="cell back">CE</div>
                <div onClick={() => this.operate('/')} className="cell division">/</div>
                <div onClick={() => this.operate('*')} className="cell multipy">X</div>
                <div onClick={() => this.operate('-')} className="cell minus">-</div>
                <div onClick={() => this.operate('1')} className="cell one">1</div>
                <div onClick={() => this.operate('2')} className="cell two">2</div>
                <div onClick={() => this.operate('3')} className="cell three">3</div>
                <div onClick={() => this.operate('4')} className="cell four">4</div>
                <div onClick={() => this.operate('5')} className="cell five">5</div>
                <div onClick={() => this.operate('6')} className="cell six">6</div>
                <div onClick={() => this.operate('7')} className="cell seven">7</div>
                <div onClick={() => this.operate('8')} className="cell eight">8</div>
                <div onClick={() => this.operate('9')} className="cell nine">9</div>
                <div onClick={() => this.operate('0')} className="cell zero">0</div>
                <div onClick={() => this.operate('=')} className="cell enter">=</div>
                <div onClick={() => this.operate('.')} className="cell dot">.</div>
                <div onClick={() => this.operate('+')} className="cell plus">+</div>
            </div>
        )
    }
}

export default App