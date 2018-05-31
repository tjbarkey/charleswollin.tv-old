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
        <HexGrid   width={630} height={200} viewBox="-2 15 140 50">
          {/* Grid with manually inserted hexagons */}
          <Layout size={{ x: 9, y: 9 }} flat={true} spacing={1} origin={{ x: 0, y: 0 }}>

            <Hexagon q={0} r={3} s={2} className="nolink"/>
            <Hexagon q={0} r={2} s={3} className="nolink"/>
            <Hexagon q={1} r={1} s={3} className="nolink"/>

              <a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>
              <Hexagon q={1} r={2} s={2} className="link">
                <Text>ABOUT</Text>
              </Hexagon>
              </a>


            <Hexagon q={2} r={2} s={1} className="nolink"/>

              <a href="javascript:;" onClick={() => {props.onOpenArticle('read')}}>
              <Hexagon q={3} r={1} s={1} className="link">
                <Text>READ</Text>
              </Hexagon>
              </a>

            <Hexagon q={4} r={0} s={1} className="nolink"/>

              <a href="javascript:;" onClick={() => {props.onOpenArticle('listen')}}>
              <Hexagon q={5} r={0} s={0} className="link">
                <Text>LISTEN</Text>
              </Hexagon>
              </a>

            <Hexagon q={6} r={0} s={-1} className="nolink"/>

              <a href="javascript:;" onClick={() => {props.onOpenArticle('watch')}}>
              <Hexagon q={7} r={-1} s={-3} className="link">
                <Text>WATCH</Text>
              </Hexagon>
              </a>

            <Hexagon q={8} r={-2} s={-5} className="nolink"/>

              <a href="javascript:;" onClick={() => {props.onOpenArticle('live')}}>
              <Hexagon q={9} r={-2} s={-6} className="link">
                <Text>LIVE</Text>
              </Hexagon>
              </a>

            <Hexagon q={9} r={-3} s={-7} className="nolink"/>
            <Hexagon q={10} r={-3} s={-8} className="nolink"/>
            <Hexagon q={10} r={-2} s={-7} className="nolink"/>

            {/* Using pattern (defined below) to fill the hexagon */}

          </Layout>
        </HexGrid>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
