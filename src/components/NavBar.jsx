import React from 'react'

const NavBar = () => {
  return (
    <div className="paliwal-top">
        <div className="paliwal-bar paliwal-white paliwal-padding paliwal-card" style={{ letterSpacing: '4px' }}>
          <a href="#home" className="paliwal-bar-item paliwal-button">Paliwal's Feast</a>
          <div className="paliwal-right paliwal-hide-small">
            <a href="#about" className="paliwal-bar-item paliwal-button">About</a>
            <a href="#menu" className="paliwal-bar-item paliwal-button">Menu</a>
            <a href="#contact" className="paliwal-bar-item paliwal-button">Contact</a>
          </div>
        </div>
      </div>
  )
}

export default NavBar
