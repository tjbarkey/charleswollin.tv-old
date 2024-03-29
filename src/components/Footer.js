import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
    <ul className="icons">
      <li><a href="http://www.twitter.com/cwollin" className="icon fa-twitter" target="_blank"><span className="label">Twitter</span></a></li>
      <li><a href="https://www.linkedin.com/in/charleswollin/" className="icon fa-linkedin" target="_blank"><span className="label">LinkedIn</span></a></li>
      <li><a href="http://www.instagram.com/djchuckywo" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
    </ul>
        <p className="copyright">&copy;2018 Charles Wollin.</p>

    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
