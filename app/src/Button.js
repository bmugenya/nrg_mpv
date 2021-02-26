import React from 'react'
import { Button } from '@material-ui/core'
import './css/Button.css'

const CustomButton = ({ text }) => {
  return (
    <Button className='custom_btn btn-lg'>
      <span className='btn_text'>{text} </span>
    </Button>
  )
}

export default CustomButton
