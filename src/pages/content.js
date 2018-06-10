import React from 'react'
import Link from 'gatsby-link'
import pic02 from '../images/pic02.jpg'

const ContentPage = () => (

    <div id="newwrapper" className="wrapped">
      <span className="image main"><img src={pic02} alt="" /></span>
      <h2 className="major">Content</h2>
      <p>Charles is an active sports writer and regularly covers soccer events, teams, and culture.  He has written for a number of publicatins, including [publication titles].
          He is currently focused on his column in SFGate, where he explores the past, present and future of soccer in San Francisco.  In his column, Charles is <em>Searching For The Soul of Soccer In San Francisco</em> by
          interviewing teams, bars, clubs, organizations, and people who are meaninfully contributing to the the sport and its community in SF.  He hopes his column will expose newcomers to the rich
          community and history that surrounds soccer in SF in order to expand that community and continue the tradition.
        </p>
        <p>
          Click through the links below to read through his written works, listen to his podcast, or watch videos to re-live the match with commentary by Charles.
      </p>

      <h3>Written Works</h3>
      <ul>
        <li> <a href="https://blog.sfgate.com/soccer/author/footysf/">Searching for the Soul of Soccer in San Francisco - SF Gate</a> </li>

      </ul>

      <h3>Podcast</h3>
      <iframe width="100%" height="360" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/292183969&color=%23034694&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>


      <h3>Videos</h3>


      <iframe width="100%" height="360" src="https://www.youtube.com/embed/videoseries?list=PLs_sfeBDdnpBDkX2LJ79N4rGyQ4ettuBA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSFCityFC%2Fvideos%2F1633058993390702%2F&show_text=0&width=560" width="100%" height="360" ></iframe>
      <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FSFCityFC%2Fvideos%2F1638281602868441%2F&show_text=0&width=560" width="100%" height="360" ></iframe>
      <iframe src="https://player.vimeo.com/video/92368368" width="100%" height="360" frameborder="0" allowfullscreen></iframe>



    </div>


)

export default ContentPage
