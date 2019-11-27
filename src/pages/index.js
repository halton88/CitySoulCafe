import React from "react"
import Header from "../components/header"
import About from "../components/about"
import {graphql} from "gatsby";

export const query = graphql`
query MyQuery {
  allSanityTeamMember {
    nodes {
      name
      primary_title
      secondary_title
      _rawImage
      id
      Image {
        asset {
          path
          label
        }
      }
    }
  }
  allSanityContent {
    nodes {
      title
      featured
      id
    }
  }
  allSanityEvent {
    nodes {
      title
      date(formatString: "")
      featured
      id
    }
  }
}
`

const IndexPage = ({data}) => (
  <div id="app">
    <div id="home">
      {/* {console.log(data)} */}
      <Header/>
    <div className="info">
      <p>Noir Bar & Lounge</p>
      <p className="info-address">425 Glenwood ave
        <span>Raliegh NC</span>
      </p>
    </div>
    <div className="tagline">Speak Your Truth.</div>
    <button className="cta">Check Us Out</button>
    </div>
    <About data={data.allSanityTeamMember}/>
  </div>
)


export default IndexPage
