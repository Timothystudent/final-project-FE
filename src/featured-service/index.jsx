import React from 'react'

const FeaturedService = () => {
  return (
    <>
        {/* ======= Featured Services Section ======= */}
        <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
              <div className="icon"><i className="fas fa-heartbeat" /></div>
              <h4 className="title"><a href>Medical Check-Up</a></h4>
              <p className="description">Pemeriksaan kesehatan lengkap untuk pasien</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
              <div className="icon"><i className="fas fa-pills" /></div>
              <h4 className="title"><a href>Obat-obatan</a></h4>
              <p className="description">Tersedia obat-obat penanganan pertama untuk pasien</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
              <div className="icon"><i className="fas fa-dna" /></div>
              <h4 className="title">Layanan Darurat<a href></a></h4>
              <p className="description">Menyediakan layanan penanganan pertama untuk pasien yang memiliki kebutuhan darurat</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
              <div className="icon"><i className="fas fa-thermometer" /></div>
              <h4 className="title"><a href>Konsultasi</a></h4>
              <p className="description">U-Clinic menyediakan sesi Konsultasi untuk pasien yang membutuhkan</p>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Featured Services Section */}
    </>
  )
}

export default FeaturedService