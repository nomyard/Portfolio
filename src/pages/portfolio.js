import React from 'react'
import Link from 'gatsby-link'
import { Parallax } from 'react-parallax'
import MediaQuery from 'react-responsive'

import mountain from '../resources/images/mountain2.jpg'

const Portfolio = () => (
  <div>
    <MediaQuery minDeviceWidth={768}>
      <Parallax
        strength={500}
        style={{
          marginBottom: '3rem',
          width: 'auto',
          borderRadius: '12px',
          height: 'auto',
        }}
        bgImageAlt="Photo by Phillipe Touppet on Unsplash"
        bgImage={mountain}
      >
        <div style={{ height: '300px' }} />
      </Parallax>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 480px)">
      <img
        src={mountain}
        style={{ borderRadius: '12px', objectFit: 'contain' }}
      />
    </MediaQuery>

    <h3
      style={{
        textDecoration: 'none',
        marginRight: '2rem',
        paddingBottom: '.5rem',
        borderBottom: '1px solid #2626f7',
        color: 'black'
      }}
    >
      <em>Portfolio</em>
    </h3>
    <h5>
      <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to="/contactform/"
      >
        <em>Contact Me</em>
      </Link>
    </h5>

    <h5>
      <Link
        style={{
          textDecoration: 'none',
          marginRight: '2rem',
          color: 'black'
        }}
        to="/"
      >
        <em>Home</em>
      </Link>
    </h5>

    <h1 style={{ marginTop: '2rem', color: 'black' }}>Completed Work</h1>
    <h4 style={{color: 'black', textAlign: 'center'}}>
      Will Be Updated Soon!!! Stay tuned!
    </h4>
  </div>
)

export default Portfolio
