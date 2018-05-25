import React from 'react'
import Link from 'gatsby-link'
import { Parallax } from 'react-parallax';

import mountain from '../resources/images/mountain2.jpg';

const Portfolio = () => (
  <div>
  <Parallax strength={500} style={{marginBottom: '3rem', width: 'auto', borderRadius: '12px'}} bgImageAlt="Photo by Philippe Toupet on Unsplash" bgImage={mountain}>
      <div style={{ height: '300'}} />
    </Parallax>
    <h3 style={{textDecoration: 'none', marginRight: '2rem', paddingBottom: '.5rem', borderBottom: '1px solid black'}}><em>Portfolio</em></h3>        
    <h5><Link style={{textDecoration: 'none', color: '#333333'}} to="/contactform/"><em>Contact Me</em></Link></h5>
    
    <h5><Link style={{textDecoration: 'none', color: '#333333', marginRight: '2rem'}} to="/"><em>Home</em></Link></h5>

    <h1 style={{marginTop: '2rem'}}>Hi from the second page</h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare
      lacinia lacus. Ut mollis dictum hendrerit. Mauris blandit massa et velit
      hendrerit, at accumsan leo dapibus. Suspendisse blandit mi vel dui
      vehicula accumsan. Nam sagittis quis mi ac scelerisque. Nam condimentum
      elit in tellus suscipit, ullamcorper laoreet ante sollicitudin. Etiam
      interdum justo risus, eu molestie metus commodo eget. Vestibulum sit amet
      est hendrerit, porta libero a, cursus eros. Pellentesque pretium nulla sit
      amet congue consectetur. Duis euismod urna orci, ut rhoncus augue posuere
      at. Mauris vulputate egestas velit, in rutrum nibh. Sed ornare felis eu
      turpis pulvinar pulvinar. Maecenas auctor eros ac ante malesuada, et
      ornare dui scelerisque. Integer suscipit pellentesque ipsum non gravida.
      Nunc convallis odio et malesuada iaculis. Vestibulum eget gravida nulla,
      non maximus mauris. Maecenas pulvinar ipsum id libero bibendum tincidunt.
      Etiam condimentum sem eget velit eleifend sollicitudin. Integer turpis
      leo, pharetra a euismod sollicitudin, lobortis non massa. Proin blandit
      rhoncus ante. Donec varius pharetra dictum. Etiam dignissim dictum lacus,
      eu gravida nibh cursus non. Nam sed nisi venenatis, maximus felis sed,
      vulputate arcu. Duis suscipit tempus orci sed vehicula. Duis ante justo,
      condimentum at accumsan interdum, cursus fermentum sem. Aenean varius at
      lorem eget efficitur. Pellentesque rhoncus nibh ut nibh facilisis
      pharetra. Vestibulum eu fringilla libero, nec egestas felis. Praesent
      lacinia eros eget orci lacinia, non eleifend libero rutrum. Sed laoreet,
      lorem eget porta elementum, enim purus dapibus dolor, vel rhoncus risus ex
      ut ipsum. Mauris at ultricies dolor. Pellentesque tempor leo eget cursus</p>
  </div>
)

export default Portfolio
