import React from 'react'
import logo from "../assest/logo.png"


const Header = () => {
  return (
    <header>
      {/*desktop*/}
      <div className=''>
        <div className='h-12'>
        <img src={logo} className='h-full'></img>

      </div>

      </div>

      {/*mobile*/}
    </header>
  )
}

export default Header
