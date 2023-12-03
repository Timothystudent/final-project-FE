import React from 'react'

const Faq = () => {
  return (
    <>
       {/* ======= Frequently Asked Questioins Section ======= */}
       <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questioins</h2>
          <p>
Pertanyaan-pertanyaan yang sering ditanyakan.            </p>
        </div>
        <ul className="faq-list">
          <li>
            <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Apakah pemeriksaan kesehatan umum dipungut biaya?<i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
              <p>
                Tidak dipungut biaya apapun
              </p>
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Apakah tersedia semua jenis obat-obatan ? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
              <p>
                Tidak, hanya obat-obat pertolongan pertama 
              </p>
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Apakah mahasiswa dapat melakukan konsultasi dengan dokter ? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
              <p>
                Tentu saja, selama pada jam operasional dokter              
                </p>
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Ada berapa Dokter yang bertugas di klinik? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
              <p>
                Untuk saat ini hanya ada 1 Dokter.
              </p>
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Apakah ketika pasien mendapatkan obat dari dokter dipungut biaya? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
              <p>
                Semua obat diberikan secara Gratis
              </p>
            </div>
          </li>
          <li>
            <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Apakah pasien yang bukan merupakan warga Universita Klabat dapat dilayani? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
              <p>
                Iya selama masih bisa dilayani 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>{/* End Frequently Asked Questioins Section */}
    </>
  )
}

export default Faq