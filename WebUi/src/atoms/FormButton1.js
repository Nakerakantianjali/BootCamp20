import React from 'react'
import { Button } from '@material-ui/core'

export function FormButton1(props) {
    return (
        <div>
                        <Button color={props.color} onClick={props.onClick} style={{width:"auto"}}><props.Icon /><div style={{marginLeft:30}}>{props.value}</div></Button>

        </div>
    )
}

export default FormButton1
