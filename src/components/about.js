import React from "react"

const generateTeam = (team) => {
  return (
    team.map((teammate) => (
    <div className="team" key={teammate.id}>
      <h3 className="team_member-name">{teammate.name}</h3>
     <img className="team_member-img" alt="" src={teammate.Image?.asset?.url}/>
      <p className="team_member-title">{teammate.primary_title}</p>
      <p className="team_member-secondary-title">{teammate.secondary_title}</p>
    </div>
    ))
  )
}

export default (team) => (
  <div id="about">
    <h2 className="about_title">Meet The Team</h2>
    {generateTeam(team.data.nodes)}
  </div>
)