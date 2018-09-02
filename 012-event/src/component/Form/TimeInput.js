import React, {Component} from 'react'
import {DatePicker, TimePicker} from 'antd'
import {Form, Input,Label, Icon} from 'semantic-ui-react'
import moment from 'moment'



class TimeInput extends Component {
 
    render() {
        let {input: {value, onChange, onBlur,...restInput},  label, required, meta: { touched, error, warning }, ...rest} = this.props
        console.log('value', value)
    
        return (
            <Form.Field required={required}   >
                <label >{label}</label>
                <TimePicker
                    {...rest}
                    value={value ?  moment.unix(value).format('h:mm A'): moment(value)}
                    use12Hours
                    format="h:mm A"
                    onChange={(val) => onChange(moment.unix(val))} />
                {
                    touched &&
                    ( (error && <Label color='red' pointing='left'>{error}</Label>) ||
                        (warning && <Label color='orange' pointing='left'>{warning}</Label>))
                }
                {
                    touched && !error && !warning &&
                    <Icon name='check circle' color='green'/>
                }
            </Form.Field>
        )
    }
}

export default TimeInput