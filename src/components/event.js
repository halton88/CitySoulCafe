import React from "react"

export default ({data}) => {
  return (
    <div className="events">
      <h2 className="events_title">The Schedule</h2>
      {data.nodes.map(event => (
        <div className="event event1">
          <h3 className="event_info">{event.date.slice(5)}</h3>
          <h3 className="event_title">{event.title}</h3>
          <p className="event_description">{event.description}</p>
        </div>
      ))}
  </div>
  )
}