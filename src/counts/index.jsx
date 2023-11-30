import React from 'react'

const Counts = () => {
  return (
    <>
     {/* ======= Counts Section ======= */}
     <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fas fa-user-md" />
              <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Doctor & Nurse</strong> Pada U-klinik ini tersedia 1 dokter dan 1 perawat saja</p>
              <a href="#">Find out more »</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="far fa-hospital" />
              <span data-purecounter-start={0} data-purecounter-end={26} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Equipment</strong> Alat-alat di U-klinik</p>
              <a href="#">Find out more »</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fas fa-flask" />
              <span data-purecounter-start={0} data-purecounter-end={14} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Lab check-up</strong> Untuk saat ini tersedia untuk pemeriksaan TBC dan hepatitis</p>
              <a href="#">Find out more »</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fas fa-award" />
              <span data-purecounter-start={0} data-purecounter-end={150} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Awards</strong> Klinik terbaik di UNKLAB</p>
              <a href="#">Find out more »</a>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Counts Section */}
    </>
  )
}

export default Counts