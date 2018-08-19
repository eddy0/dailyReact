import React from 'react'
import {Form, Label, Select} from 'semantic-ui-react'



const SelectInput = (props) => {
    const {input,  placeholder, multiple, options, meta: {touched, error} } = props
    return (
        <Form.Field error={touched && !!error} >
            <Select
                value={input.value || null}
                onChange={(e, data) => input.onChange(data.value)}
                placeholder={placeholder}
                options={options}
                multiple={multiple}
            />
            {touched && error && <Label basic >{error}</Label> }
        </Form.Field>
    )
}

export default SelectInput