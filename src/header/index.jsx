import React from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [image2, setImage] = useState("");

  useEffect(() => {
      const db = getDatabase();
      const heroRef = ref(db, "hero/");
      onValue(heroRef, (snapshot) => {
        const data = snapshot.val();
        setTitle(data.title);
        setSubTitle(data.subTitle);
        setImage(data.image2);
      });
  }, []);

  return (
   <>
     <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <a href="index.html" className="logo me-auto"><img src={image2} alt /></a>
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