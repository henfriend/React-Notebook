import './PageListing.css'
import React, { useState, useMemo } from 'react'
import PageItem from './PageItem'

function PageListing(props) {
    return (
        <ul>
            {   
                props.value.map((name, i) => (
                    <li key={name}>
                        <PageItem value={{ title: name, index: i}} onClick={props.onClick}></PageItem>
                    </li>
                ))
            }
        </ul>
    )
}

export default PageListing