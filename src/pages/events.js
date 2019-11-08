import React from "react"
import {graphql} from "gatsby"
import Header from "../components/header"

const query = graphql`
    query MyQuery {
    allSanityEvent {
      nodes {
        title
        date(formatString: "")
        featured
      }
    }
  }
`

class Events extends React.Component{
  constructor(){
    super()
  }
  generateEvents() {
    console.log(data)
  }
  render(){
    return(
      <div id="app">
        <Header/>
        {this.generateEvents()}
      </div>
       
    )
  }
}

export default Events