import React from 'react'
import './styles.css';

export default function MainScreen({ children }: { children : React.ReactNode}) {
  return (
    <div className='main-screen'>
      {/* <iframe
       src="https://css-tricks.com/creating-realistic-reflections-with-css/"
       className='iframe' 
      >

      </iframe> */}
      {children}
    </div>
  )
}
