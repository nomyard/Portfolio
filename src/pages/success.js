import React from 'react'
import officeGif from '../resources/images/michaelscottdwight.webp'
import styled from 'styled-components';

const Success = () => (
  <div>
    <PrettyMichaelDwight src={officeGif} />
    <SuccessMessage > Success! </SuccessMessage>
    <SuccessMessage > I'll get back to you as soon as possible! </SuccessMessage>
    
  </div>
)

const PrettyMichaelDwight = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`

const SuccessMessage = styled.h3`
  text-align: center;
  color: black;
  margin-top: 4%;
  font-size: 40px;
`


export default Success
