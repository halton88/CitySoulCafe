import React from "react"

class Event extends React.Component{
  render(){
    return(
      <div className="events">
        <div className="event">
          <h3>1st Wednesdays</h3>
          <h4>DJ Supreme Live on the 1's & 2's</h4>
        </div>
        <div className="event">
          <h3>2nd Wednesdays</h3>
          <h4>Business Mixer</h4>
        </div>
        <div className="event">
          <h3>3rd Wednesdays</h3>
          <h4>DJ Supreme Love on the 1's & 2's</h4>
        </div>
        <div className="event">
          <h3>4th Wednesdays</h3>
          <h4>Local Feature or touring Feature TBA</h4>
        </div>
      </div>
    )
  }
}

export default Event