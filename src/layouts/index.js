import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import WorldCupGraphic from '../components/WorldCupGraphic'
import WorldCupInfo from '../components/WorldCupInfo'



class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',

    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }




  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }

  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }



  render() {


    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const { location, children } = this.props

    let rootPath = `/`
    let worldPath = `/worldcup`

    let content;

    if (location.pathname.toLowerCase() === worldPath) {
      content = (
        <div>
        <div id="wrapper">
          <WorldCupGraphic onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
          <WorldCupInfo
            isArticleVisible={this.state.isArticleVisible}
            timeout={this.state.timeout}
            articleTimeout={this.state.articleTimeout}
            article={this.state.article}
            onCloseArticle={this.handleCloseArticle}
          />
        </div>
        </div>
      )
    }

    else if (location.pathname === rootPath) {

        content = (
          <div>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
          </div>
        )

    }

    else {
      content = (
        <div id="newwrapper" className="inner">
          <nav>
          <ul>
          <li>
          <a href="../">RETURN TO HOMEPAGE</a>
          </li>
          </ul>
          </nav>
        <div id="newwrapper" className="page">
            {children()}

        </div>
        </div>
      )
    }

    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
        </Helmet>

        {content}


      </div>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
