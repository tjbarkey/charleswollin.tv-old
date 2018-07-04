import React from 'react'
import Link from 'gatsby-link'
import pic01 from '../images/pic01.jpg'

const AboutPage = () => (

    <div>
      <span className="image main"><img src={pic01} alt="" /></span>
      <h2 className="major">About Charles</h2>
      <p>Now in his 4th season as commentator with SF City, Wollin is a British-born Marin native and dual-citizen.
        Wollin currently serves as the voice of The W.tv’s coverage of soccer broadcasts at the University of San Francisco.
        He has been calling Division I College Soccer since 2009, including stints at Stanford University and Santa Clara.
        Earlier this year, he started writing and blogging about soccer culture in San Francisco for SFGate.</p>
        <p>Wollin is one of the lead voices of Street Soccer USA and their National Cup campaign program across the United States.
          In 2015, he became a sideline reporter for Comcast and BAOSN.tv where he covers the high school football and basketball
          game of the week broadcasts.</p>
        <p>In 2014, he travelled to Brazil to cover the FIFA World Cup for the full duration of the tournament.
          His prior work experience also includes calling matches for the San Jose Earthquakes, National Premier Soccer League,
          and Tourbeau Sports Network. He has also been a featured pundit and impersonator on Fox Soccer Channel and Wynalda Talks
          Football on Sirius XM. Wollin began his career at his alma mater, the University of Arizona, covering men’s basketball for Zona Zoo TV.</p>
        <p>In addition to broadcasting, Wollin is a professional impersonator, voice-over artist, activist
          and is a proud member of the San Francisco Spikes.</p>
        <p>Charles is active on social media.  You can follow him on <a href="http://www.twitter.com/cwollin">Twitter</a>, <a href="http://www.instagram.com/djchuckywo">Instagram</a>, and <a href="https://www.linkedin.com/in/charleswollin/" >LinkedIn</a> for
          updates and opinions on soccer in San Francisco, around the US, and abroad!</p>


      <ul className="icons">
        <li><a href="http://www.twitter.com/cwollin" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="https://www.linkedin.com/in/charleswollin/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
        <li><a href="http://www.instagram.com/djchuckywo" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
      </ul>

    </div>


)

export default AboutPage
