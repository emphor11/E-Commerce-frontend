import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='NewsLetter'>
        <h1>Get Excxclusive Offers On your Mail</h1>
        <p>Subscribe To Newsletter and Stay Updated</p>
        <div>
            <input type='email' placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter