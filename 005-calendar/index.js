
const Item = (props) => {
    let now = (props.now) ? 'now': null
    return (
        <div className={`item ${props.type} ${now}`} onClick={() => props.handleClick(props.date, props.type)} >
            {props.date}
        </div>
    )
}


class App extends React.Component {
    constructor() {
        super()
    }

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
        if (this.state.year % 400 ) {
            dates[1] = 29
        } else if (this.state.year % 400 !== 0  && this.state.year % 4 ) {
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
        let offset = map[type]
        this.setState((prevState) =>({
            month: prevState.month + offset,
            date: date,
        }))
    }

    render() {
        const dates = this.currentDate()
        const totalDays = dates[this.state.month]
        const firstDay = new Date(this.state.year, this.state.month, 1).getDay()

        let lastMonth = []
        let gap = (firstDay === 0) ? 6 : firstDay - 1

        for (var i = gap - 1; i >= 0 ; i--) {
            let r = dates[this.state.month - 1] - i
            lastMonth.push(r)
        }

        let lastDays = 42 - totalDays - lastMonth.length


        return (
            <div className='container'>
                {
                    [ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN' ].map((day,i) => {
                        return <Item date={day} key={i} type='header' handleClick={this.handleClick} />
                    })
                }
                {
                    lastMonth.map((day,i) => {
                        return <Item date={day} key={i} type='last' handleClick={this.handleClick} />
                    })
                }
                {
                    (new Array(totalDays).fill(null)).map((day, i) => {
                        return <Item date={i+1} key={i} type='current' now={this.state.date === (i+1)} handleClick={this.handleClick} />
                    })
                }
                {
                    (new Array(lastDays).fill(null)).map((day, i) => {
                        return <Item date={i+1} key={i} type='next' handleClick={this.handleClick} />
                    })
                }


            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
