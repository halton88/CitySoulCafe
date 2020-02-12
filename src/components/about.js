import React from "react"

import fb from '../images/fb.png'
import ig from '../images/ig.png'
import twitter from '../images/twitter.png'

const generateTeam = (team) => {
  return (
    team.map((teammate) => (
    <div className="team" key={teammate.id}>
      <h3 className="team_member-name">{teammate.name}</h3>
     <img className="team_member-img" alt="" src={teammate.Image.asset.url}/>
      <p className="team_member-title">{teammate.primary_title}</p>
      <p className="team_member-secondary-title">{teammate.secondary_title}</p>
      <span className="social-personal">
        <a href={teammate.twitter}><img id="twitter-personal" src={twitter} alt="twitter logo"/></a>
        <a href={teammate.facebook}><img id="fb-personal" src={fb} alt="facebook logo"/></a>
        <a href={teammate.instagram}><img id="ig-personal" src={ig} alt="instagram logo"/></a>
      </span>
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