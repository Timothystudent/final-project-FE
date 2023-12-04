import React from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";



const Doctors = () => {
  const [doctor, setDoctor] = useState("");
  const [nurse, setNurse] = useState("");
  const [labor1, setLabor1] = useState("");
  const [labor2, setLabor2] = useState("");

  useEffect(() => {
      const db = getDatabase();
      const heroRef = ref(db, "hero/");
      onValue(heroRef, (snapshot) => {
        const data = snapshot.val();
        setDoctor(data.doctor);
        setNurse(data.nurse);
        setLabor1(data.labor1);
        setLabor2(data.labor2);
      });
  }, []);

  return (
    <>
    {/* ======= Doctors Section ======= */}
    <section id="doctors" className="doctors section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>EMPLOYEES</h2>
          <p>Berikut ini adalah daftar profil dokter, perawat, dan student labor yang bertugas di Klinik</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={100}>
              <div className="member-img">
                <img src={doctor} className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>dr. Nancy Sampouw, M.Kes</h4>
                <span>Dokter</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={200}>
              <div className="member-img">
                <img src={nurse} className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Ns. Yesenia Ketty Dalos, S.Kep</h4>
                <span>Perawat</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={300}>
              <div className="member-img">
                <img src={labor1} className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Marchela Mais</h4>
                <span>Student Labor</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="member" data-aos="fade-up" data-aos-delay={400}>
              <div className="member-img">
                <img src={labor2} className="img-fluid" alt />
                <div className="social">
                  <a href><i className="bi bi-twitter" /></a>
                  <a href><i className="bi bi-facebook" /></a>
                  <a href><i className="bi bi-instagram" /></a>
                  <a href><i className="bi bi-linkedin" /></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Hendri Katang</h4>
                <span>Student Labor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Doctors Section */}
    </>
  )
}

export default Doctors