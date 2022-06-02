import React, { useContext, useEffect, useState } from 'react'
import DocumentsContext from './DocumentsContext'

function Editor() {
    const { doc, setDoc } = useContext(DocumentsContext)
    const [text, setText] = useState(doc.array[doc.index])

    const onTextChange = event => {
        setText(event.target.value)
    }

    useEffect(() => {
        const newDoc = doc.array
        newDoc[doc.index] = text
        setDoc({ array: newDoc, index: doc.index})
    }, [text])

    useEffect(() => {
        const textArea = document.querySelector('textarea')
        textArea.value = doc.array[doc.index]
    }, [doc.index])

    useEffect(() => {
        const textArea = document.querySelector('textarea')
        textArea.value = doc.array[doc.index]
    }, [doc.array.length])

    return (
        <textarea cols="85" rows="85" defaultValue={text} onChange={onTextChange}></textarea>
    )
}

export default Editor