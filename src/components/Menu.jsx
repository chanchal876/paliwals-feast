import React from 'react';

// Import images
import thali from '../assets/Images/daal_bati_churma_thali.webp';

const Menu = () => {
  return (
    <>
      <div className="paliwal-row paliwal-padding-64" id="menu">
        <div className="paliwal-col l6 paliwal-padding-large">
          <h1 className="paliwal-center">Our Menu</h1><br />

          <h4>Daal</h4>
          <p className="paliwal-text-grey">A hearty and flavorful lentil curry, seasoned with cumin, turmeric, and garlic. Served with rice or fresh bread.</p><br />
          
          <h4>Bati</h4>
          <p className="paliwal-text-grey">Crumbly wheat flour balls, baked to perfection. Traditionally paired with daal and churma for a complete meal.</p><br />
          
          <h4>Churma</h4>
          <p className="paliwal-text-grey">A sweet, crumbly dessert made from coarsely ground wheat, ghee, and sugar. A traditional Rajasthani delicacy.</p><br />
          
          <h4>Kadi</h4>
          <p className="paliwal-text-grey">Tangy and creamy yogurt-based curry with gram flour dumplings. A comforting and flavorful dish.</p><br />
          
          <h4>Chawal</h4>
          <p className="paliwal-text-grey">Steamed white rice served as a staple accompaniment to the main dishes, perfectly complementing the flavors of our traditional curries.</p><br />
          
          <h4>Seasonal Sabji</h4>
          <p className="paliwal-text-grey">A delightful vegetable curry made with fresh, seasonal produce. Flavored with traditional spices, this dish varies based on what's in season.</p>
        </div>

        <div className="paliwal-col l6 paliwal-padding-large" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={thali} className="paliwal-round paliwal-image paliwal-opacity-min" alt="Daal Bati Churma" style={{ width: '100%', height: 'auto', maxHeight: '100%' }} />
        </div>
      </div>

      <hr />
    </>
  );
}

export default Menu;
