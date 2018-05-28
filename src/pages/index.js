import React from 'react'
import Link from 'gatsby-link'
import { Parallax, Background } from 'react-parallax'
import MediaQuery from 'react-responsive'

import philly from '../resources/images/philly.jpg'

const IndexPage = () => (
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
        bgImageAlt="Photo by u/acnthxyl on Reddit"
        bgImage={philly}
      >
        <div style={{ height: '300px' }} />
      </Parallax>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 480px)">
      <img
        src={philly}
        style={{ borderRadius: '12px', objectFit: 'contain' }}
      />
    </MediaQuery>

    <h3
      style={{
        textDecoration: 'none',
        marginRight: '2rem',
        paddingBottom: '.5rem',
        borderBottom: '1px solid #2626f7',
      }}
    >
      <em>Home</em>
    </h3>
    <h5>
      <Link
        style={{
          textDecoration: 'none',
          color: '#333333',
          marginRight: '2rem',
        }}
        to="/portfolio/"
      >
        <em>Portfolio</em>
      </Link>
    </h5>
    <h5>
      <Link
        style={{ textDecoration: 'none', color: '#333333' }}
        to="/contactform/"
      >
        <em>Contact Me</em>
      </Link>
    </h5>

    <h1 style={{ marginTop: '2rem' }}> About Me</h1>

      
    <h4
      style={{
        borderLeft: 'solid 1px #2626f7',
        padding: '2rem',
        lineHeight: '2rem',
      }}
    >
      I'm an Air Force veteran, book-worm, and lifelong creator. When I'm
      not programming I'm either reading, writing, or making music. I'm self-driven, and I have an unquenchable thirst for knowledge.
    </h4>

    <h2> My Skills Include:</h2>
    <div style={{ display: 'inline-block' }}>
      <h4 style={{ display: 'block' }}> JavaScript</h4>
      <h4 style={{ display: 'block' }}> HTML5 </h4>
      <h4 style={{ display: 'block' }}> CSS3 </h4>
      </div>
      <div style={{ display: 'inline-block' }}>
        <h4 style={{ display: 'block', marginLeft: '5rem' }}> ReactJS </h4>
        <h4 style={{ display: 'block', marginLeft: '5rem' }}> VueJS </h4>
        <h4 style={{ display: 'block', marginLeft: '5rem' }}> Redux </h4>
      </div>
    <div style={{ display: 'inline-block' }}>
      <h4 style={{ display: 'block', marginLeft: '5rem' }}> NodeJS </h4>
      <h4 style={{ display: 'block', marginLeft: '5rem' }}> MongoDB </h4>
      <h4 style={{ display: 'block', marginLeft: '5rem' }}> ExpressJS </h4>
    </div>
  </div>
)

export default IndexPage
