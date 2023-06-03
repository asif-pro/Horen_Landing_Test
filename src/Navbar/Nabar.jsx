import React from 'react'
import './Navbar.css'

const Nabar = () => {
  return (
    <>
<nav id="navbar" class="">
  <div class="nav-wrapper">
    {/* <!-- Navbar Logo --> */}
    <div class="logo">
      {/* <!-- Logo Placeholder for Inlustration --> */}
      <a href="#home"><i class="fas fa-chess-knight"></i> Horen</a>
    </div>
    {/* <!-- Navbar Links --> */}
     <ul id="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Live Dashboard</a></li>
        <button className='signupBtn' type="button">Sign Up</button>
     </ul>
  </div>
</nav>


    {/* <!-- Menu Icon --> */}
    <div class="menuIcon">
    <span class="icon icon-bars"></span>
    <span class="icon icon-bars overlay"></span>
    </div>

    <div class="overlay-menu">
    <ul id="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Live Dashboard</a></li>
        </ul>
    </div>
    </>
  )
}

export default Nabar