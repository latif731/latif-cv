import React from 'react'
import './form.css'

import {Container, Row, Col} from 'reactstrap'


const Form = () => {
  return (
    <form className='form'>
        <div className="form_input">
            <input type="text" placeholder='Your Name'/>
        </div>
        <div className="form_input">
            <input type="email" placeholder='Your Email'/>
        </div>
        <div className="form_input">
            <textarea placeholder='Write Message'>
            </textarea>
        </div>
        <button className="submit_button" type='submit'>
            Submit
        </button>
    </form>
  )
}

export default Form