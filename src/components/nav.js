import { Link } from "gatsby"
import React from "react"

const Nav = () => (
 <nav className="navbar">
   <Link className="navbar-link" to="/about"><li>ABOUT</li></Link>
   <Link className="navbar-link" to="/events"><li>EVENTS</li></Link>
   <Link className="navbar-link" to="/gallery"><li>GALLERY</li></Link>
   <Link className="navbar-link" to="/contact"><li>CONTACT</li></Link>
   <Link className="navbar-link" to="/donate"><li className="donate">DONATE</li></Link>

 </nav>
)


export default Nav
