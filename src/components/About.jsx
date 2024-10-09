import React from 'react'
import TableSitting from '../assets/Images/table_sitting.jpg';

const About = () => {
  return (
    <>
    <div className="paliwal-row paliwal-padding-64" id="about">
          <div className="paliwal-col m6 paliwal-padding-large paliwal-hide-small">
            <img src={TableSitting} className="paliwal-round paliwal-image paliwal-opacity-min" alt="Table Setting" width="600" height="900" />
          </div>
          <div className="paliwal-col m6 paliwal-padding-large">
            <h1 className="paliwal-center">About Paliwal's Feast</h1><br />
            <h5 className="paliwal-center">Homemade Delights</h5>
            <p className="paliwal-large">At Paliwal's Kitchen, our journey began in a small village where tradition and love for authentic Rajasthani cuisine were passed down through generations. Founded by Mrs. Anita Paliwal, our kitchen has been serving the finest home-cooked delicacies, with a special focus on the traditional dish of Daal Bati Churma.</p>
            <p className="paliwal-large paliwal-text-grey paliwal-hide-medium">We believe in preserving the age-old recipes that bring out the true flavors of Rajasthan. Each meal is crafted using fresh, seasonal ingredients, ensuring that every bite transports you to the heart of Rajasthani culture. Our Daal Bati Churma, slow-cooked to perfection, combines the earthy richness of bati, the spicy comfort of daal, and the sweetness of churma, making it a timeless classic.</p>
            <p className="paliwal-large">At Paliwal's Kitchen, we celebrate the essence of home-cooked meals that bring families together, offering a taste of tradition with every serving.</p>
          </div>
        </div>

        <hr />
    </>
  )
}

export default About
