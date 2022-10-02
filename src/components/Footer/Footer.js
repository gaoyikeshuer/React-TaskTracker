import React from 'react'
import { Link } from 'react-router-dom'
//Link is kind of similar to href, the difference is without loading the page
const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2021</p>
        <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer