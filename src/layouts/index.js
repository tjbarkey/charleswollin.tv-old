import React from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import MHeader from '../components/MHeader'
import Main from '../components/Main'
import Footer from '../components/Footer'




class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
      width: window.innerWidth,
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}


  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    window.removeEventListener('resize', this.handleWindowSizeChange);
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

  handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};

  render() {
    const { width } = this.state;
    const isMobile = width <= 550;

    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const { location, children } = this.props

    let rootPath = `/`

    let content;

    if (location.pathname === rootPath) {
      if(isMobile){
        content = (
          <div id="wrapper">
            <MHeader onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
            />
            <Footer timeout={this.state.timeout} />
          </div>
        )
      }
      else{
      content = (
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
      )
    }
    } else {
      content = (
        <div id="wrapper" className="page">
          <div style={{
            maxWidth: '1140px'
          }}>
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

        <div id="bg"></div>
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
