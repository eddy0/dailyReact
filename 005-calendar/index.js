
const Title = (props) => {
    return (
        <div>
            {props.year}-{props.month+1}-{props.date}
        </div>
    )
}


const Item = (props) => {
    let now = (props.now) ? 'now': null
    return (
        <div className={`item ${props.type} ${now}`} onClick={() => props.handleClick(props.date, props.type)} >
            {props.date}
        </div>
    )
}


class App extends React.Component {

    getDate = (data) => {
        let year = new Date(data).getFullYear()
        let month = new Date(data).getMonth()
        let date = new Date(data).getDate()

        this.setState(() => ({
            year,
            month,
            date,
        }))
    }

    currentDate = () => {
        let dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
        if (this.state.year % 400 === 0 ) {
            dates[1] = 29
        } else if (this.state.year % 400 !== 0  && this.state.year % 4 === 0 ) {
            dates[1] = 29
        }

        return dates
    }

    componentWillMount() {
        const now = Date.now()
        this.getDate(now)
    }

    handleClick = (date, type) => {
        let map = {
            'current': 0,
            'last': -1,
            'next': +1,
        }

        if (map[type] !== undefined) {
            let offset = map[type]
            this.setState((prevState) =>{
            let month = prevState.month + offset
            if (month >= 12) {
                return {
                    month: 0,
                    date: date,
                    year: prevState.year + 1
                }
            } else if (month < 0) {
                return {
                    month: 11,
                    date: date,
                    year: prevState.year - 1
                }
            } else {
                return {
                    month: month,
                    date: date,
                }
            }
            })
        }
    }

    getLastDays = () => {
        const firstDay = new Date(this.state.year, this.state.month, 1).getDay()
        const dates = this.currentDate()
        let lastMonth = []
        let gap = (firstDay <= 2 ) ? 6 + firstDay :  firstDay - 1
        let index = this.state.month - 1
        if (index < 0) {
            index = 11
        }
        for (var i = gap - 1; i >= 0 ; i--) {
            let r = dates[index] - i
            lastMonth.push(r)
        }

        return lastMonth
    }

    render() {
        const dates = this.currentDate()
        const currentDays = dates[this.state.month]
        const lastMonth = this.getLastDays()
        const nextDays = 42 - currentDays - lastMonth.length


        return (
            <div>

                <Title {...this.state} />

                <div className='container'>
                    {
                        [ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN' ].map((day,i) => {
                            return <Item date={day} key={i} type='title' handleClick={this.handleClick} />
                        })
                    }
                    {
                        lastMonth.map((day,i) => {
                            return <Item date={day} key={i} type='last' handleClick={this.handleClick} />
                        })
                    }
                    {
                        (new Array(currentDays).fill(null)).map((day, i) => {
                            return <Item date={i+1} key={i} type='current' now={this.state.date === (i+1)} handleClick={this.handleClick} />
                        })
                    }
                    {
                        (new Array(nextDays).fill(null)).map((day, i) => {
                            return <Item date={i+1} key={i} type='next' handleClick={this.handleClick} />
                        })
                    }


                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
