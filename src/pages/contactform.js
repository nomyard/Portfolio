import React from 'react'
import Link from 'gatsby-link'
import { navigateTo } from 'gatsby-link'
import { Parallax } from 'react-parallax'
import FaGithubSquare from 'react-icons/lib/fa/github-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

import singapore from '../resources/images/singapore2.jpg'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
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

        <NavigationNotifier>
          <em>Contact</em>
        </NavigationNotifier>

        <h5>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            <em>Home</em>
          </Link>
        </h5>

        <h5>
          <Link
            style={{
              textDecoration: 'none',
              marginRight: '2rem',
              color: 'black',
            }}
            to="/portfolio/"
          >
            <em>Portfolio</em>
          </Link>
        </h5>

        <PageTitle>Contact Me!</PageTitle>

        <SocialMedia target="blank" href="https://github.com/nomyard">
          {' '}
          <FaGithubSquare size={36} />{' '}
        </SocialMedia>
        <SocialMedia
          target="blank"
          href="https://www.linkedin.com/in/raymondrosario91/"
        >
          {' '}
          <FaLinkedinSquare style={{ marginLeft: '1rem' }} size={36} />
        </SocialMedia>
        <SocialMedia target="blank" href="https://twitter.com/n0myard">
          {' '}
          <FaTwitterSquare style={{ marginLeft: '1rem' }} size={36} />{' '}
        </SocialMedia>

        <div style={{ marginTop: '2rem' }}>
          <form
            name="contact"
            method="post"
            action="/success"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <p style={{ display: 'none' }}>
              <label>
                {' '}
                Don't fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <h4 style={{ marginBottom: '.5rem', color: 'black' }}> Name: </h4>
              <PrettyInput
                type="text"
                name="name"
                onChange={this.handleChange}
                placeholder="Name"
              />
            </p>
            <p>
              <h4 style={{ marginBottom: '.5rem', color: 'black' }}>
                {' '}
                Email:{' '}
              </h4>
              <PrettyInput
                type="email"
                name="email"
                onChange={this.handleChange}
                placeholder="Email"
              />
            </p>
            <p>
              <h4 style={{ marginBottom: '.5rem', color: 'black' }}>
                {' '}
                Message:{' '}
              </h4>
              <PrettyTextArea
                name="message"
                onChange={this.handleChange}
                placeholder="Message"
              />
            </p>
            <p>
              <PrettyButton type="submit">Send</PrettyButton>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

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

const SocialMedia = styled.a`
  text-decoration: none;
  color: black;
`
const PrettyInput = styled.input`
  display: flex;
  width: 50%;
  border: 1px solid #333;
  border-radius: 5px;
  font-family: sans-serif;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 18px;
  padding-left: 0.3rem;
`
const PrettyTextArea = styled.textarea`
  height: 200px;
  display: flex;
  width: 50%;
  border: 1px solid #333;
  border-radius: 5px;
  font-family: sans-serif;
  padding-top: 0.5rem;
  padding-left: 0.3rem;
  font-size: 18px;
`

const PrettyButton = styled.button`
  background-color: #2626f7;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 1% 4% 1% 4%;
  font-family: sans-serif;
  font-size: 20px;
  cursor: pointer;
  margin-left: 37%;
`

export default ContactForm
