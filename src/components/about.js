import React from "react"
import Logo from "./logo"
import Nav from "./nav"

const generateTeam = (team) => {
  return (
    team.map((teammate) => (
    <div className="team" key={teammate.id}>
      <h3>{teammate.name}</h3>
     <img className="team-img" src={teammate.Image.asset.url}/>
      <p>{teammate.primary_title}</p>
      <p>{teammate.secondary_title}</p>
    </div>    
    ))
  )
}

export default (team) => (
  <div id="about">
    <h2>Meet The Team</h2>
    {generateTeam(team.data.nodes)}
  </div>
)