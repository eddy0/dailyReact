class Spinner extends React.Component {
    
    style = (i) => {
        let style = {
            transform: `rotate(${30*i}deg)`,
            animationDelay: `${0.1*i}s`,
        }

        return style
    }

    render() {
        return(
            <ul className='spinner'>
                {
                    [...Array(12).keys()].map((item, i) => {
                        return (
                            <li key={i} style={this.style(i)} />
                        )
                    })
                }
            </ul>
        )
    }
}


ReactDOM.render(
    <Spinner />,
    document.getElementById('app')
)
