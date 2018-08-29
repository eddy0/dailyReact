import React, {Component} from 'react'
import { TimePicker } from 'antd';
import {Form, Input,Label, Icon} from 'semantic-ui-react'



class TimeInput extends Component {
    onChange = (time, timeString) => {
        console.log(time, timeString);
    }
    render() {
        return (
            <div>
                <TimePicker use12Hours format="h:mm A" onChange={this.onChange} />
            </div>
        )
    }
}

export default TimeInput