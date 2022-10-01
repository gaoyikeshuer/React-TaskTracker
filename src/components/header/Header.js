import React from 'react'
import './Header.css'
import Button from '../button/Button'

const Header = ({title, onAdd, showAdd}) => {
 
  return (
    <header className='header'>
      <h1>{title}</h1>
      
      <Button onClick = {onAdd} color = {showAdd? 'red': 'green'} text= {showAdd? 'Close': 'Add'}/>
    </header>
  )
}


export default Header
