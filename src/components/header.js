import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Link
        to="/"
        style={{
          color: 'black',
          textDecoration: 'none',
        }}
      >
        <h1>{siteTitle}</h1>
        <h3
          style={{
            borderBottom: 'solid 1px #2626f7',
            paddingBottom: '1.5rem',
            paddingLeft: '7rem',
          }}
        >
          {' '}
          Full Stack Developer | Ardent Learner | Aspiring Cyborg{' '}
        </h3>
      </Link>
    </div>
  </div>
)

export default Header
