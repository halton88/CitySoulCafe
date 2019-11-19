import React from "react"

class Event extends React.Component{
  constructor(){
    super()
  }
  render(){
    const day = this.props.data.date;
    return(
      <div className="event">
        <h2>{day.slice(-2)}</h2>
        {/* <h5>{this.props.data.date.slice(0,-2)}</h5> */}
        <div className="event-img"></div>
        <h3>{this.props.data.title}</h3>
      </div>
    )
  }
}

export default Event