import React from 'react'
import './Header.css'
import Button from '../button/Button'

const Header = ({title}) => {
  const onClick = () =>{
    console.log('clic')
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      
      <Button onClick = {onClick} color = 'green' text= 'Add'/>
    </header>
  )
}


export default Header
