import React from 'react'

function Header(props) {
  return (
    <header>
    <div className='container'>
        <h1 className='header'>
            {props.text}
        </h1>
    </div>
    </header>
  )
}

export default Header
