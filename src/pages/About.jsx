import React from 'react'
import Card from '../Components/shared/Card'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div>
      <Card>
        <h1>About this project</h1>
        <Link to='/'>
          du-te acasa
        </Link>
      </Card>
    </div>
  )
}

export default About
