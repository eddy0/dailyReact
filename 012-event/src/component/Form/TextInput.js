import React from 'react'
import {Form, Input} from 'semantic-ui-react'

// input: name, onBlur, onchange, onDrageStart, onDrop, onFocus, value
// meta: active, asyncValidating: autofilled error

const TextInput = (props) => {
    const {input, type, placeholder, label, required} = props
    return (
        
        <Form.Field required={required}>
            <label>{label}</label>
            <Input {...input} placeholder={placeholder} type={type} />
        </Form.Field>
    
    )
}

export default TextInput
