import React from 'react'
import Link from 'gatsby-link'
import { Parallax } from 'react-parallax'
import FaGithubSquare from 'react-icons/lib/fa/github-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square'
import MediaQuery from 'react-responsive'

import singapore from '../resources/images/singapore2.jpg'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

render() {
  return(
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

    <h1 style={{ marginTop: '2rem' }}>Contact Me!</h1>

    <a
      target="blank"
      href="https://github.com/nomyard"
      style={{ textDecoration: 'none', color: '#333333' }}
    >
      {' '}
      <FaGithubSquare size={36} />{' '}
    </a>
    <a
      target="blank"
      href="https://www.linkedin.com/in/raymondrosario91/"
      style={{ textDecoration: 'none', color: '#333333' }}
    >
      {' '}
      <FaLinkedinSquare style={{ marginLeft: '1rem' }} size={36} />
    </a>
    <a
      target="blank"
      href="https://twitter.com/n0myard"
      style={{ textDecoration: 'none', color: '#333333' }}
    >
      {' '}
      <FaTwitterSquare style={{ marginLeft: '1rem' }} size={36} />{' '}
    </a>

    <div style={{ marginTop: '2rem' }}>
      <form name="contact" method="post" action="/success/" data-netlify="true" netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
        <p style={{display: "none"}}>
          <label> Don't fill this out: <input name="bot-field" onChange={this.handleChange}/></label>
        </p>
        <p>

            <input style={{display: 'flex', width: '20rem'}} type="text" name="name" onChange={this.handleChange} placeholder="Name"/>

        </p>
        <p>

            <input style={{ display: 'flex', width: '20rem'}} type="email" name="email" onChange={this.handleChange} placeholder="Email"/>

        </p>
        <p>
            <textarea style={{height: '200px', display: 'flex', width: '20rem'}} name="message" onChange={this.handleChange} placeholder="Write me a message" />
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
            Send
          </button>
        </p>
      </form>
    </div>
  </div>
  )
  }
}
