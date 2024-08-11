import { Editor } from '@/app/components/editor/Editor'
import Header from '@/app/components/Header'
<<<<<<< HEAD
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Document = () => {
=======
import React from 'react'

const document = () => {
>>>>>>> 34f6514d44a5a672b39d730f4c199d4b45a52049
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2">
          <p className="document-title">This is a fake document title</p>
        </div>
<<<<<<< HEAD
        <SignedOut  >
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </Header>
      <Editor/>
    </div>
  );
};

export default Document

=======
      </Header>
      <Editor/>
    </div>
  )
}

export default document
>>>>>>> 34f6514d44a5a672b39d730f4c199d4b45a52049
