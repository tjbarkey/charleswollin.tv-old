import React from 'react'
import Link from 'gatsby-link'

class WorldCupInfo extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

      <article id="richmondrepublic" className={`${this.props.article === 'richmondrepublic' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">Richmond Republic</h2>
        <p>
          "The Richmond Republic Draught House is a Beer & Wine Pub serving great food with your choice of 24 beers on tap. We focus mainly on local beers brewed mainly in the San Francisco Bay"
        </p>
        <a href="http://www.richmondrepublicsf.com">Link to their site.</a>

        {close}
      </article>

      <article id="mcteague" className={`${this.props.article === 'mcteague' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">McTeague's</h2>
        <p>
          "Evoking the charm of Frank Norris' great novel McTeague, we're located on the popular nightlife corridor running along Polk Street. McTeague's is your your bar for all occasions, mixing the comfort of a local watering hole with the energy of a busy weekend night spot. And we're your GoTo for sports with full NFL, MLB, NBA, NHL, Soccer and UFC coverage on our many large screen TVs."
        </p>
        <a href="https://www.mcteagues.me/">Link to their site.</a>

        {close}
      </article>

      <article id="maddog" className={`${this.props.article === 'maddog' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">Mad Dog In The Fog</h2>
        <p>
          "Soccer-loving English pub with notable beer selections, trivia nights & sports-viewing parties."
        </p>
        <a href="https://maddoginthefog.com/">Link to their site.</a>

        {close}
      </article>

      <article id="streetsoccer" className={`${this.props.article === 'streetsoccer' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">Street Soccer USA HQ</h2>
        <p>
          "Street Soccer USA is a non-profit organization under the umbrella of HELP USA that promotes the growth and development of a national network of grassroots soccer programs. "
        </p>
        <a href="http://www.streetsoccerusa.org">Link to their site.</a>

        {close}
      </article>

      <article id="schroeder" className={`${this.props.article === 'schroeder' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">Schroeder's</h2>
        <p>
          "Historic German beer hall (since 1893) has bratwurst, boot-glass beers, Oktoberfest parties & more."
        </p>
        <a href="http://www.schroederssf.com">Link to their site.</a>

        {close}
      </article>

      <article id="kezarpub" className={`${this.props.article === 'kezarpub' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">Kezar Pub</h2>
        <p>
          "Fans cheer all kinds of sports on flat-screens throughout this spot serving pub grub & beer on tap."
        </p>
        <a href="http://www.kezar.pub">Link to their site.</a>

        {close}
      </article>

      <article id="abbeytavern" className={`${this.props.article === 'abbeytavern' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">Abbey Tavern</h2>
        <p>
          "Irish expats, USF students & sports fans drop in for drinks, live music & European soccer-viewing."
        </p>
        <a href="http://www.abbeytavern-sf.com">Link to their site.</a>

        {close}
      </article>

      <article id="dannycoyle" className={`${this.props.article === 'dannycoyle' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">Danny Coyle's</h2>
        <p>
          "International sports fans root for their teams at this Irish pub that opens early on game days."
        </p>
        <a href="http://www.dannycoyles.com">Link to their site.</a>

        {close}
      </article>

      <article id="cafelaflore" className={`${this.props.article === 'cafelaflore' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">Cafe La Flore</h2>
        <p>
          "Cafe serving breakfast & handcrafted soups & sandwiches, plus an early-morning (coffee) happy hour."
        </p>
        <a href="http://ordercafelaflore.com/">Link to their site.</a>

        {close}
      </article>

      <article id="standarddeviant" className={`${this.props.article === 'standarddeviant' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">Standard Deviant</h2>
        <p>
          "House-brewed beer, food-truck fare & pinball in a low-key setting with an indoor beer garden vibe."
        </p>
        <a href="https://standarddeviantbrewing.com/">Link to their site.</a>

        {close}
      </article>

      <article id="maggiemcgarry" className={`${this.props.article === 'maggiemcgarry' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">Maggie McGarry's</h2>
        <p>
          "Longtime Irish bar pouring pints, showing soccer matches & staging performances by cover bands."
        </p>
        <a href="http://www.maggiemcgarrys.com/">Link to their site.</a>

        {close}
      </article>

      <article id="civiccenter" className={`${this.props.article === 'civiccenter' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">Civic Center</h2>
        <p>
          San Francisco will be hosting a massive viewing party in the Civic Center event plaza.  Join other SF soccer fanatics to watch the big event on the big screen! 
        </p>
        <a href="https://www.worldcupsf.com/">Link to the event page.</a>

        {close}
      </article>

      <article id="viewingparties" className={`${this.props.article === 'viewingparties' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

        <h2 className="major">World Cup Final Viewing Parties in SF!</h2>
        <p>
          Well, y’all, it’s been an emotional ride, but we have arrived at the World Cup Final!  Our final match is a pairing of France and Croatia.  France, a powerhouse in 2018, who have been to the final 2 times before,
          became champions in 1998 after knocking out Croatia in the Semifinal and beating Brazil with a brutal 3-0 sweep.  Croatia, while a young nation, is a force to be reckoned with.  They placed third in their very first
          World Cup in 1998, and have recently knocked out the likes of England and host country, Russia.  Will this be a victory for the underdog, or another notch in the belt for a strong, persistent team?  Join Charles and
          thousands of San Francisco soccer fans to watch the drama continue!
        </p><p>
          See the list below for information about where you can watch the big match.  This list may be updated though Sunday, so check back for a party near you!
        </p>
        <ul>
        <li> Civic Center - <a href="https://www.worldcupsf.com/">This is a free event!</a>  Watch the World Cup Final at Civic Center with a massive crowd!</li>
        <li>Kick It 365 - <a href="https://www.eventbrite.com/e/fifa-world-cuptm-final-france-vs-croatia-brunch-day-party-tickets-47116704331#tickets">Click for tickets, $10-$25</a> </li>
        <li>The following bars have announced that they are showing the World Cup Final match:
          <ul>
          <li><a href="https://www.mcteagues.me/">McTeagues</a></li>
          <li><a href="http://www.kezar.pub">Kezar</a></li>
          <li><a href="https://maddoginthefog.com/">Mad Dog</a></li>
          <li><a href="http://www.nickies.com">Nickies</a></li>
          <li><a href="http://www.maggiemcgarrys.com/">Maggie McGarry's</a></li>
          <li><a href="http://www.abbeytavern-sf.com">Abbey Tavern</a></li>
          <li><a href="http://www.richmondrepublicsf.com">Richmond Republic</a></li>
          <li><a href="https://standarddeviantbrewing.com/">Standard Deviant</a></li>
          <li><a href="http://www.dannycoyles.com">Danny Coyle's</a></li>
          <li><a href="http://sparksocialsf.com/events-1/2018/7/15/world-cup-final">Spark Social SF</a></li>
        </ul>
        </li>


      </ul>

        {close}
      </article>


      </div>
    )
  }
}

WorldCupInfo.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default WorldCupInfo
