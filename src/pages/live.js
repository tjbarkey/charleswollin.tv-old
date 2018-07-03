import React from 'react'
import Link from 'gatsby-link'
import pic04 from '../images/pic04.jpg'

const LivePage = () => (

    <div>
      <span className="image main"><img src={pic04} alt="" /></span>
      <h2 className="major">See Him In Action!</h2>
      <p>
        Charles regularly commentates games for USF Men's and Women's Soccer, as well as SF City FC matches.  He also emcees soccer events around the city, and
         events for the Bay Area chapter of University of Arizona Alumni Association, The Bay Cats.  Check this page for upcoming events where you can catch him in action!
        </p>
        <iframe className="calendar" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23cccccc&amp;src=a1ns5cfcuamkioo4eldm9l8hbo%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=America%2FLos_Angeles"></iframe>

    </div>


)

export default LivePage
