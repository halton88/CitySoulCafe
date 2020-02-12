import React from "react"
import Header from "../components/header"
import Event from "../components/event"
import About from "../components/about"
import Contact from "../components/contact"
import {graphql} from "gatsby";


export const query = graphql`
query MyQuery {
  allSanityTeamMember {
    nodes {
      name
      primary_title
      secondary_title
      twitter
      facebook
      instagram
      _rawImage
      id
      Image {
        asset {
          url
        }
      }
    }
  }
  allSanityEvent {
    nodes {
      title
      date(formatString: "")
      featured
      id
      description
    }
  }
}
`

const IndexPage = ({data}) => (
  <div id="app">
    <div id="home">
      <Header/>
    <div className="info">
      <p>Noir Bar & Lounge</p>
      <p className="info-address">425 Glenwood ave, Raliegh NC</p>
    </div>
    <div className="tagline">Soul of the City</div>
    <button className="cta">Check Us Out</button>
    </div>
    <Event data={data.allSanityEvent}/>
    <About data={data.allSanityTeamMember}/>
    <Contact/>
  </div>
)


export default IndexPage
