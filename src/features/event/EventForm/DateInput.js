import React, {Component} from 'react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {Form, Label} from 'semantic-ui-react'



const DateInput =(props) => {
        const {input: {value, onChange, ...restInput},  width,  placeholder, meta: {touched, error}, ...rest } = props
        return (
            <Form.Field error={touched && !!error} width={width}>
                <DatePicker {...rest}
                    selected={value ? moment(value) : null}
                    placeholderText={placeholder}
                    onChange={onChange}
                    {...restInput}
                />
                {touched && error && <Label basic>{error}</Label> }
            </Form.Field>
        )
    
}


export default DateInput