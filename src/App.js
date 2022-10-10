import './App.css'
import React, { useEffect, useState, useMemo } from 'react'
import PageListing from './PageListing'
import NewPageButton from './NewPageButton'
import Editor from './Editor'
import DocumentsContext from './DocumentsContext'

function App() {
  const textBox = document.querySelector('input')
  const createButton = document.querySelector('#create')

  const [buttonText, setButtonText] = useState('Create New Document')
  const [list, setList] = useState([])
  const [docName, setDocName] = useState('Untitled')
  const [doc, setDoc] = useState({ array: [''], index : 0 })
  const [title, setTitle] = useState('')
  const value = useMemo(
    () => ({ doc, setDoc }),
    [doc]
  )

  useEffect(() => {
    if(docName === '') {
      setDocName('Untitled')
    }
  }, [docName])

  useEffect(() => {
    setTitle(list[doc.index])
  })

  const onClickPageItem = () => {
    const editor = document.querySelector('#editor')
    if(editor.classList.contains('hidden')) {
      editor.classList.remove('hidden')
    }
  }

  const newPageOnClick = () => {
    if(buttonText === 'Create New Document') {
      setButtonText('Cancel')
    } else {
      setButtonText('Create New Document')
    }
    textBox.classList.toggle('hidden')
    createButton.classList.toggle('hidden')
  }

  const onTextChange = event => {
    setDocName(event.target.value)
  }

  const onCreate = () => {
    setList([docName, ...list])
    document.querySelector('input').value = ''
    if(docName !== 'Untitled') {
      setDocName('Untitled')
    }

    textBox.classList.toggle('hidden')
    createButton.classList.toggle('hidden')
    setButtonText('Create New Document')
    
    const newDoc = doc.array
    if(list.length > 0) {
      newDoc.unshift('')
    }
    setDoc({ array: newDoc, index: 0})

    const editor = document.querySelector('#editor')
    if(editor.classList.contains('hidden')) {
      editor.classList.remove('hidden')
    }
  }

  return (
    <DocumentsContext.Provider value={value}>
      <div>
        <section id='section-one'>
          <h1>My Notebook</h1>
          <div>
            <NewPageButton value={buttonText} onClick={newPageOnClick}></NewPageButton>
            <input className="hidden" onChange={onTextChange} type="text"></input>
            <button id='create' onClick={onCreate} className="hidden">Create</button>
          </div>
          <div className="App">
            <PageListing value={list} onClick={onClickPageItem}/>
          </div>
        </section>
        <section className='hidden' id='editor'>
          <h2>{title}</h2>
          <Editor/>
        </section>  
      </div>
    </DocumentsContext.Provider>
  )
}

export default App
