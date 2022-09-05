import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </footer>
    </>
  )
}

export default React.memo(Footer)
