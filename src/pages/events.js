import React from "react"
import {graphql} from "gatsby"
import Header from "../components/header"
import Event from "../components/event"

export const query = graphql`
    query MyQuery {
    allSanityEvent {
      nodes {
        id
        title
        date(formatString: "MMMM D")
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
    return this.props.data.allSanityEvent.nodes.map(event => {
      return <Event key={event.id} data={event}/>
    })
  }
  render(){
    return(
      <div id="app">
        <Header/>
        <div className="events">
          {this.generateEvents()}
        </div>
      </div>
    )
  }
}

export default Events