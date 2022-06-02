import React from 'react'

const DocumentsContext = React.createContext({
   document: { array: [''], index: 0},
   setDocument: () => {}
})

export default DocumentsContext