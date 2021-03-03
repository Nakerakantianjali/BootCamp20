import React from 'react'

export function FormInput(props) {
    return (
        <div>
                          <input type='Text' name="input2"  data-testid="input1" placeholder='Enter Text' value = {props. value}  
onChange= {props.onChange} />
        </div>
    )
}

export default FormInput
