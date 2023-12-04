import React from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Hero = () => {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        const db = getDatabase();
        const heroRef = ref(db, "hero/");
        onValue(heroRef, (snapshot) => {
          const data = snapshot.val();
          setTitle(data.title);
          setSubTitle(data.subTitle);
          setImage(data.image);
        });
    }, []);

  return (
    <>

      {/* ======= Hero Section ======= */}
  <section id="hero">
    <div id="heroCarousel" data-bs-interval={5000} className="carousel slide carousel-fade" data-bs-ride="carousel">
      <ol className="carousel-indicators" id="hero-carousel-indicators" />
      <div className="carousel-inner" role="listbox">
        {/* Slide 1 */}
        <div className="carousel-item active" style={{backgroundImage: `url(${image})`}}>
          <div className="container">
            <h2>Welcome To <span>U-Clinic</span></h2>
            <p>{title}</p>
            <a href="#about" className="btn-get-started scrollto">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Hero */}
    </>
  )
}

export default Hero