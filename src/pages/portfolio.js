import React from 'react'
import Link from 'gatsby-link'
import { Parallax } from 'react-parallax'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

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

    <NavigationNotifier>
      <em>Portfolio</em>
    </NavigationNotifier>
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
          color: 'black',
        }}
        to="/"
      >
        <em>Home</em>
      </Link>
    </h5>

    <PageTitle>Completed Work</PageTitle>
    <PageContent>
      Various Works are in progress and are receiving their finishing touches.
      This page will be updated soon!
    </PageContent>
  </div>
)

const NavigationNotifier = styled.h3`
  text-decoration: none;
  margin-right: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #2626f7;
  color: black;
`

const PageContent = styled.h4`
  color: black;
  text-align: center;
`

const PageTitle = styled.h1`
  margin-top: 2rem;
  color: black;
`

export default Portfolio
