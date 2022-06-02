import React from 'react'

function NewPageButton(props) {
    return (
        <button onClick={props.onClick}>{props.value}</button>
    )
}

export default NewPageButton