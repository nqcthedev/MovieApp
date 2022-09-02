import React, { FC } from 'react'

import Footer from '../Footer'
import Header from "@/component/Layout/Header"

interface ChildrenProps {
  children: any
}
const DefaultLayout:FC<ChildrenProps> = ({children}:any) => {
  return (
    <div>
      <Header/>
      <div>{children}</div>
      <Footer/>
    </div>
  )
}

export default DefaultLayout