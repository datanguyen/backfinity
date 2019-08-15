import React from 'react'

export default class Footer extends React.PureComponent {

  renderInfo(href, label) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    )
  }


  render() {
    return (
      <footer>
        {this.renderInfo('https://twitter.com/dattannguyencse', 'twitter')}{' '}&bull;{' '}
        {this.renderInfo('https://www.linkedin.com/in/dattannguyen', 'linkedin')}{' '}&bull;{' '}
        {this.renderInfo('https://www.facebook.com/ntdat.joker', 'facebook')}{' '}
        <div style={{ float: 'right' }}>{new Date().toDateString()}</div>
      </footer>
    )
  }
}
