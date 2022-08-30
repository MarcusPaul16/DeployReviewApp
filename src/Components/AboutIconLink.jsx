import React from 'react'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div>
        <Link to='/about'>
            <h1 className='about-link'>du-te acolo</h1>
        </Link>
    </div>
  )
}

export default AboutIconLink
