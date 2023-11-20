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
              <p><strong>Doctors</strong> consequuntur quae qui deca rode</p>
              <a href="#">Find out more »</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="far fa-hospital" />
              <span data-purecounter-start={0} data-purecounter-end={26} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Departments</strong> adipisci atque cum quia aut numquam delectus</p>
              <a href="#">Find out more »</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fas fa-flask" />
              <span data-purecounter-start={0} data-purecounter-end={14} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Research Lab</strong> aut commodi quaerat. Aliquam ratione</p>
              <a href="#">Find out more »</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="fas fa-award" />
              <span data-purecounter-start={0} data-purecounter-end={150} data-purecounter-duration={1} className="purecounter" />
              <p><strong>Awards</strong> rerum asperiores dolor molestiae doloribu</p>
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