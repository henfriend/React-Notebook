import './PageItem.css'
import React, { useContext } from 'react'
import DocumentsContext from './DocumentsContext'

function PageItem(props) {
    const { doc, setDoc } = useContext(DocumentsContext)
    const onClickPageItem = () => {
        props.onClick()
        setDoc({ array: doc.array, index: props.value.index})
    }

    return (
        <button onClick={onClickPageItem}>{props.value.title}</button>
    )
}

export default PageItem