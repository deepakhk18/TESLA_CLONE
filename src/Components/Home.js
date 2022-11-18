import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
         title="Model S"
         description="order Online for TOchless Delivery"
         backgroundImg="model-s.jpg"
         leftBtnText="Custom order"
         rightBtnText="Existing inventary"
        />
        <Section 
        title="Model Y"
         description="order Online for TOchless Delivery"
         backgroundImg="model-y.jpg"
         leftBtnText="Custom order"
         rightBtnText="Existing inventary" />

        <Section title="Model 3"
         description="order Online for TOchless Delivery"
         backgroundImg="model-3.jpg"
         leftBtnText="Custom order"
         rightBtnText="Existing inventary"/>
        <Section title="Model X"
         description="order Online for TOchless Delivery"
         backgroundImg="model-x.jpg"
         leftBtnText="Custom order"
         rightBtnText="Existing inventary" />
         <Section
           title="Lowest Cost Solar Panels in America"
           description="Money back gurantee"
           backgroundImg="solar-panel.jpg"
           leftBtnText="Order now"
           rightBtnText="Learn more"
         
         />
         <Section 
           title="Solar for new Roofs"
           description="solar Roof Costs less Than a New Roof Plus Solar Panels"    
           backgroundImg="solar-roof.jpg"
           leftBtnText="Order now"
           rightBtnText="Learn more"     
         />
         <Section
          title="Accessories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop now"
          
         />



         
    </Container>
  )
}

export default Home

const Container =styled.div `
height:100;`