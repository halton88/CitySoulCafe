import React from "react"
import Header from "../components/header"
import {graphql} from "gatsby";

// const query = graphql`
//   query myQuery {

//   }
// `

const IndexPage = ({data}) => (
  <div id="app">
    <Header/>
    <div className="info">
      <p>Noir Bar & Lounge</p>
      <p className="info-address">425 Glenwood ave
        <span>Raliegh NC</span>
      </p>
    </div>
    <div className="tagline">Speak Your Truth.</div>
    <button className="cta">Learn More</button>
  </div>
)


export default IndexPage
