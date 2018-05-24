import React from 'react'
import Link from 'gatsby-link'
import philly from '../resources/images/philly.jpg'

const IndexPage = () => (
  <div>
    <p>Welcome to my pagggggggeeeeeeeeeeee yoooooooo</p>
    <Link to="/page-2/">Go to page 2</Link>
    <img src={philly} />
  </div>
)


export default IndexPage
