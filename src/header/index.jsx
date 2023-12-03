import React from 'react'

const Header = () => {
  return (
   <>
     <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <a href="index.html" className="logo me-auto"><img src="src/assets/img/Logo2.png" alt /></a>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <h1 class="logo me-auto"><a href="index.html">Medicio</a></h1> */}
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto " href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#departments">Facilities</a></li>
          <li><a className="nav-link scrollto" href="#doctors">Employees</a></li>
          
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
      <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>
    </div>
  </header>{/* End Header */}
   </>
  )
}

export default Header