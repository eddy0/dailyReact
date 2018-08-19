import React, {Component} from 'react'
import {Form, Label} from 'semantic-ui-react'



export default function TextArea(props) {
    const {input,   placeholder, rows, meta: {touched, error} } = props
    return (
        <Form.Field error={touched && !!error} >
            <textarea {...input} placeholder={placeholder} rows={rows}  />
            {touched && error && <Label basic >{error}</Label> }
        </Form.Field>
    )
    
}

