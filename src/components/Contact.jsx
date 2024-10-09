import React from 'react'

const Contact = () => {
  return (
    <div className="paliwal-container paliwal-padding-64" id="contact">
          <h1>Contact</h1><br />
          <p>At Paliwal's Feast, we craft unforgettable dining experiences with authentic Rajasthani flavors. Let us infuse your gathering with the rich tastes and heartfelt warmth of homemade traditions.</p>
          <p className="paliwal-text-blue-grey paliwal-large"><b>Homemade Food Service, Jhanda Chauk, Chawani, 465441 Agar Malwa, Madhya Pradesh, India</b></p>
          <p>You can also contact us by phone 91-0000000000 or email paliwalfeast@gmail.com, or you can send us a message here:</p>
          <form action="https://www.paliwalschools.com/action_page.php" target="_blank">
            <p><input className="paliwal-input paliwal-padding-16" type="text" placeholder="Name" required name="Name" /></p>
            {/* <p><input className="paliwal-input paliwal-padding-16" type="number" placeholder="How many people" required name="People" /></p> */}
            <p><input className="paliwal-input paliwal-padding-16" type="text" placeholder="Message \ Special requirements" required name="Message" /></p>
            <p><button className="paliwal-button paliwal-light-grey paliwal-section" type="submit">SEND MESSAGE</button></p>
          </form>
        </div>
  )
}

export default Contact
