import React from 'react'
import HeaderMain from 'src/components/HeaderMain'
import Footer from 'src/components/Footer'
interface props {
  children?: React.ReactNode
}

export default function mainLayout({ children }: props) {
  return (
    <div className=''>
      <HeaderMain />
      {children}
      <Footer />
    </div>
  )
}
