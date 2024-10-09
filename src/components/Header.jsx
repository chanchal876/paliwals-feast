import React from 'react'
import Thali from '../assets/Images/daal_bati_churma.webp';

const Header = () => {
  return (
    <div className="paliwal-display-container paliwal-content paliwal-wide" 
         style={{ maxWidth: '1600px', minWidth: '500px', height: '600px', paddingTop: '50px' }}>
      <img 
        src={Thali}
        alt="Daal Bati Churma" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
      <div className="paliwal-display-bottomleft paliwal-padding-large paliwal-opacity">
        <h1 className='paliwal-xxlarge'>Paliwal's Feast</h1>
      </div>
    </div>
  )
}

export default Header
