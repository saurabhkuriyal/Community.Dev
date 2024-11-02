import React from 'react'
import { Link } from 'react-router-dom'

export default function UnderDevelopment() {
  return (
    <div className='container'>
        <h1> Currently UnderDevelopment</h1>
        <Link  to={'/'}><button type="button" className="btn btn-warning" fdprocessedid="b076ab">Back to home</button></Link>
    </div>
  )
}
