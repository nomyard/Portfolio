import React from 'react'
import Link from 'gatsby-link'
import { Parallax, Background } from 'react-parallax'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

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

    <NavigationNotifier>
      <em>Home</em>
    </NavigationNotifier>

    <h5>
      <Link
        style={{
          textDecoration: 'none',
          color: 'black',
          marginRight: '2rem',
        }}
        to="/portfolio/"
      >
        <em>Portfolio</em>
      </Link>
    </h5>
    <h5>
      <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to="/contactform/"
      >
        <em>Contact Me</em>
      </Link>
    </h5>

    <PageTitle> About Me</PageTitle>

    <Bio>
      I'm an Air Force veteran, book-worm, and lifelong creator. When I'm not
      programming I'm either reading, writing, or making music. I'm self-driven,
      and I have an unquenchable thirst for knowledge. Contact me to find out more!
    </Bio>


    <SkillsHeader> My Skills Include:</SkillsHeader>
    <SkillsColumn>
      <LeftColumn> JavaScript</LeftColumn>
      <LeftColumn> HTML5 </LeftColumn>
      <LeftColumn> CSS3 </LeftColumn>
    </SkillsColumn>
    <SkillsColumn>
      <MiddleRightColumn> ReactJS </MiddleRightColumn>
      <MiddleRightColumn> VueJS </MiddleRightColumn>
      <MiddleRightColumn> Redux </MiddleRightColumn>
    </SkillsColumn>
    <SkillsColumn>
      <MiddleRightColumn> NodeJS </MiddleRightColumn>
      <MiddleRightColumn> MongoDB </MiddleRightColumn>
      <MiddleRightColumn> ExpressJS </MiddleRightColumn>
    </SkillsColumn>

    <SubBio>
      I built this site using GatsbyJS, ReactJS, and Styled-Components. 
    </SubBio>
  </div>
)

const NavigationNotifier = styled.h3`
  text-decoration: none;
  margin-right: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #2626f7;
  color: black;
`

const Bio = styled.h4`
  border-left: solid 1px #2626f7;
  padding: 2rem;
  line-height: 2rem;
  color: black;
`
const SubBio = styled.p`
  padding: 2%;
  line-height: 1rem;
  color: black;
  font-family: sans-serif;
  text-align: center;
  font-size: 15px;
  border-bottom: solid 1px #2626f7;
  border-top: solid 1px #2626f7;
  margin-top: 5%;
  
`

const PageTitle = styled.h1`
  margin-top: 2rem;
  color: black;
`
const SkillsHeader = styled.h2`
  color: black;
`
const SkillsColumn = styled.div`
  display: inline-block;
  color: black;
`

const LeftColumn = styled.h4`
  display: block;
`

const MiddleRightColumn = styled.h4`
  display: block;
  margin-left: 5rem;
`

export default IndexPage
