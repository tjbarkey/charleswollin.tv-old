import React from 'react'
import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
import Link from "gatsby-link";


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>

        <div className="content">
            <div className="inner">
                <h1>CHARLES WOLLIN</h1>
                <p>Welcome to the official homepage for Charles Wollin!
              </p><p>
                Click through the links below for more
                </p>
            </div>
        </div>
        <nav>
        <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('read')}}>Read</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('listen')}}>Listen</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('watch')}}>Watch</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('live')}}>Live</a></li>
        </ul>

        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
