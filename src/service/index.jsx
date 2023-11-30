import React from 'react'

const Service = () => {
  return (
   <>
      {/* ======= Services Section ======= */}
      <section id="services" className="services services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>Tersedia berbagai macam layanan</p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon"><i className="fas fa-heartbeat" /></div>
            <h4 className="title"><a href>Pemeriksaan Tekanan Darah</a></h4>
            <p className="description">Di klinik ini tersedia fasilitas untuk memeriksa tekanan darah.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon"><i className="fas fa-pills" /></div>
            <h4 className="title"><a href>Obat-Obatan</a></h4>
            <p className="description">Tersedia obat-obatan untuk pasien yang membutuhkan.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon"><i className="fas fa-hospital-user" /></div>
            <h4 className="title"><a href>Konstultasi</a></h4>
            <p className="description">Di U-klinik tersedi dokter dan dapat melakukan Konstultasi.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon"><i className="fas fa-dna" /></div>
            <h4 className="title"><a href>Pemeriksaan</a></h4>
            <p className="description">Tersedia pemeriksaan untuk Hepatitis dan TBC.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon"><i className="fas fa-wheelchair" /></div>
            <h4 className="title"><a href>Fasilitas</a></h4>
            <p className="description">Tersedia berbagai macam fasilitas yang lumayan lengkap.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon"><i className="fas fa-notes-medical" /></div>
            <h4 className="title"><a href>Penanganan Darurat</a></h4>
            <p className="description">Menangani pasien secara sigap.</p>
          </div>
        </div>
      </div>
    </section>{/* End Services Section */}
   </>
  )
}

export default Service