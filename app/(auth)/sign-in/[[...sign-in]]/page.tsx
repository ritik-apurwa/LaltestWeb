import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <section>
        <div>
            <SignIn/>
        </div>
    </section>
  )
}

export default page