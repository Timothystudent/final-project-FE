import React from 'react';

const Cta = () => {
  return (
    <>
      {/* ======= Cta Section ======= */}
      <section id="cta" className="cta">
        <div className="container" data-aos="zoom-in">
          <div className="text-center">
            <h3>Mempunyai masalah?</h3>
            <p>
              Kesehatan terganggu? Sedang merasakan sesuatu tapi tidak mengetahui penyebabnya? Ingin memastikan kondisi anda? Silahkan membuat appointment..
            </p>
            <a className="cta-btn scrollto" href="#appointment">
              Make an Appointment
            </a>
          </div>
        </div>
      </section>
      {/* End Cta Section */}
    </>
  );
};

export default Cta;
