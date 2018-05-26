import React from 'react'
import Link from 'gatsby-link'
import { Parallax } from 'react-parallax'
import FaGithubSquare from 'react-icons/lib/fa/github-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square'
import MediaQuery from 'react-responsive'

import singapore from '../resources/images/singapore2.jpg'

const ContactForm = () => (
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
        bgImageAlt="Photo by Timo Wagner on Unsplash"
        bgImage={singapore}
      >
        <div style={{ height: '300px' }} />
      </Parallax>
    </MediaQuery>
    <MediaQuery query="(max-device-width: 480px)">
      <img
        src={singapore}
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
      <em>Contact</em>
    </h3>
    <h5 style={{ textDecoration: 'none' }}>
      <Link style={{ textDecoration: 'none', color: '#333333' }} to="/">
        <em>Home</em>
      </Link>
    </h5>

    <h5>
      <Link
        style={{
          textDecoration: 'none',
          marginRight: '2rem',
          color: '#333333',
        }}
        to="/portfolio/"
      >
        <em>Portfolio</em>
      </Link>
    </h5>

    <h1 style={{ marginTop: '2rem' }}>Fill this out to contact me</h1>

    <a
      href="https://github.com/nomyard"
      style={{ textDecoration: 'none', color: '#333333' }}
    >
      {' '}
      <FaGithubSquare size={36} />{' '}
    </a>
    <a
      href="https://www.linkedin.com/in/raymondrosario91/"
      style={{ textDecoration: 'none', color: '#333333' }}
    >
      {' '}
      <FaLinkedinSquare style={{ marginLeft: '1rem' }} size={36} />
    </a>
    <a
      href="https://twitter.com/n0myard"
      style={{ textDecoration: 'none', color: '#333333' }}
    >
      {' '}
      <FaTwitterSquare style={{ marginLeft: '1rem' }} size={36} />{' '}
    </a>

    <div style={{ marginTop: '2rem' }}>
      <form name="contact" method="POST" netlify>
        <p>
          <h3>
            Name: <input type="text" name="name" />
          </h3>
        </p>
        <p>
          <h3>
            Email: <input type="email" name="email" />
          </h3>
        </p>
        <p>
          <h3>
            Message: <textarea name="message" />
          </h3>
        </p>
        <p>
          <button
            style={{
              backgroundColor: '#2626f7',
              color: 'white',
              border: '1px solid #2626f7',
              textShadow: '1px 1px 2px black',
              padding: '.5rem 3rem .5rem 3rem',
              fontFamily: 'sans-serif',
              fontSize: '1.5rem',
              boxShadow: '1px 1px 2px black',
              cursor: 'pointer',
            }}
            type="submit"
          >
            Submit
          </button>
        </p>
      </form>
    </div>
  </div>
)

export default ContactForm
