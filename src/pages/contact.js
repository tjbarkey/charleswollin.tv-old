import React from 'react'
import Link from 'gatsby-link'
import pic03 from '../images/pic03.jpg'

const ContactPage = () => (

    <div>
    <span className="image main"><img src={pic03} alt="" /></span>
    <h2 className="major">Contact</h2>
    <form id="gform" method="POST" action="https://formspree.io/charleswollinfanmail@gmail.com">
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4"></textarea>
      </div>
      <ul className="actions">
        <li><input type="submit" value="Send Message" className="special" /></li>
        <li><input type="reset" value="Reset" /></li>
      </ul>
    </form>

      <ul className="icons">
        <li><a href="http://www.twitter.com/cwollin" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="https://www.linkedin.com/in/charleswollin/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
        <li><a href="http://www.instagram.com/djchuckywo" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
      </ul>

    </div>


)

export default ContactPage
