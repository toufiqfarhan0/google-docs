import { Editor } from '@/app/components/editor/Editor'
import Header from '@/app/components/Header'
import React from 'react'

const document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">This is a fake document title</p>
        </div>
      </Header>
      <Editor/>
    </div>
  )
}

export default document
