import React from 'react'

const About = () => {
  return (
    <>
        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Informasi mengenai U-Clinic..</p>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <img src="src/assets/img/hero.jpeg" className="img-fluid" alt />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>U-Clinic</h3>
            <p className="fst-italic">
              Klinik Unklab adalah pusat pemeriksaan kesehatan di Universitas Klabat dibawah asuhan Fakultas Keperawatan.
            </p>
            <ul>
              <li><i className="bi bi-check-circle" /> Tenaga medis yang mumpuni.</li>
              <li><i className="bi bi-check-circle" /> Dokter yang berpengalaman di bidangnya.</li>
              <li><i className="bi bi-check-circle" /> Berintegritas dan bertugas sesuai Falsafah Universitas Klabat.</li>
            </ul>
            <p>
              Berada di bawah naungan Fakultas Keperawatan Universitas Klabat. Memberikan fasilitas kesehatan untuk seluruh warga Unklab..
            </p>
          </div>
        </div>
      </div>
    </section>{/* End About Us Section */}</>
  )
}

export default About