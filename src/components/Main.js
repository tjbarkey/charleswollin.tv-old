import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
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
          {close}
        </article>

        <article id="content" className={`${this.props.article === 'content' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
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



          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
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
          {close}
        </article>

        <article id="blog" className={`${this.props.article === 'blog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

          <span className="image main"><img src={pic04} alt="" /></span>
          <h2 className="major">Welcome To My Blog</h2>
          <p>

          </p>
          {close}
        </article>

        <article id="live" className={`${this.props.article === 'live' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <span className="image main"><img src={pic04} alt="" /></span>
          <h2 className="major">See Him In Action!</h2>
          <p>
            Charles regularly commentates games for USF Men's and Women's Soccer, as well as SF City FC matches.  He also emcees soccer events around the city, and
             events for the Bay Area chapter of University of Arizona Alumni Association, The Bay Cats.  Check this page for upcoming events where you can catch him in action!
            </p>
            <iframe className="calendar" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23cccccc&amp;src=a1ns5cfcuamkioo4eldm9l8hbo%40group.calendar.google.com&amp;color=%232F6309&amp;ctz=America%2FLos_Angeles"></iframe>

          {close}
        </article>





      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main
