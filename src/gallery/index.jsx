import React from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";


const Gallery = () => {
  const [schedule, setSchedule] = useState("");


  useEffect(() => {
      const db = getDatabase();
      const heroRef = ref(db, "hero/");
      onValue(heroRef, (snapshot) => {
        const data = snapshot.val();
        setSchedule(data.schedule);

      
      });
  }, []);
  return (
    <>
      {/* ======= Gallery Section ======= */}
      <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Operational Hours</h2>
          <p>JAM OPERASIONAL UNIT KESEHATAN KAMPUS</p>
        </div>
        <div ><a href={schedule}><img src={schedule}  alt /></a></div>
        {/* <div className="gallery-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><a className="gallery-lightbox" href="src/assets/img/gallery/gallery-1.jpg"><img src="src/assets/img/gallery/gallery-1.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="src/assets/img/gallery/gallery-2.jpg"><img src="src/assets/img/gallery/gallery-2.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="src/assets/img/gallery/gallery-3.jpg"><img src="src/assets/img/gallery/gallery-3.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="src/assets/img/gallery/gallery-4.jpg"><img src="src/assets/img/gallery/gallery-4.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="src/assets/img/gallery/gallery-5.jpg"><img src="src/assets/img/gallery/gallery-5.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="src/assets/img/gallery/gallery-6.jpg"><img src="src/assets/img/gallery/gallery-6.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="src/assets/img/gallery/gallery-7.jpg"><img src="src/assets/img/gallery/gallery-7.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="gallery-lightbox" href="src/assets/img/gallery/gallery-8.jpg"><img src="src/assets/img/gallery/gallery-8.jpg" className="img-fluid" alt /></a></div>
          </div>
          <div className="swiper-pagination" />
        </div> */}
      </div>
    </section>{/* End Gallery Section */}
    </>
  )
}

export default Gallery