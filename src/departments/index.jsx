import React from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Departments = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [facilities1, setFacilities] = useState("");
  const [facilities2, setFacilities2] = useState("");
  const [facilities3, setFacilities3] = useState("");
  const [facilities4, setFacilities4] = useState("");

  useEffect(() => {
      const db = getDatabase();
      const heroRef = ref(db, "hero/");
      onValue(heroRef, (snapshot) => {
        const data = snapshot.val();
        setTitle(data.title);
        setSubTitle(data.subTitle);
        setFacilities(data.facilities1);
        setFacilities2(data.facilities2);
        setFacilities3(data.facilities3);
        setFacilities4(data.facilities4);
      });
  }, []);


  return (
    <>
    {/* ======= Departments Section ======= */}
    <section id="departments" className="departments">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Facilities</h2>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                  <h4>Stetoscope</h4>
                  <p>Alat pemeriksaan yang umum</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                  <h4>Centrifuge</h4>
                  <p>Alat untuk pengambilan samel darah</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                  <h4>Sphygmomanometer</h4>
                  <p>Alat untuk pemeriksaan tekanan darah</p>
                </a>
              </li>
              <li className="nav-item mt-2">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                  <h4>Oxygen Tank</h4>
                  <p>Pertolongan pertama untuk kondisi tertentu</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <h3>Stetoscope</h3>
                <img src={facilities1} alt className="img-fluid" />
                <p>Stetoskop merupakan alat bantu pemeriksaan yang umum digunakan oleh dokter. Alat ini berfungsi untuk mendengarkan suara dari dalam tubuh, salah satunya untuk mendengar suara detak jantung dan mendeteksi kelainannya.</p>
              </div>
              <div className="tab-pane" id="tab-2">
                <h3>Centrifuge</h3>
                <img src={facilities2} alt className="img-fluid" />
                <p>Centrifuge merupakan alat yang digunakan untuk memisahkan organel berdasarkan massa jenisnya melalui proses pengendapan. Dalam prosesnya, Centrifuge menggunakan prinsip rotasi atau perputaran tabung yang berisi larutan agar dapat dipisahkan berdasarkan massa jenisnya</p>
              </div>
              <div className="tab-pane" id="tab-3">
                <h3>Sphygmomanometer</h3>
                <img src={facilities3} alt className="img-fluid" />
                <p>Tensimeter adalah alat yang digunakan untuk mengukur tekanan darah. Dengan mengetahui berapa tekanan darah kita, kita dapat menilai apakah tekanan darah/tensi darah kita normal atau tidak.</p>
              </div>
              <div className="tab-pane" id="tab-4">
                <h3>Oxygen Tank</h3>
                <img src={facilities4} alt className="img-fluid" />
                <p>Tabung oksigen merupakan alat pertolongan pertama yang dapat digunakan untuk menghadapi kondisi darurat akibat penyakit-penyakit tersebut.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>{/* End Departments Section */}
    </>
  )
}

export default Departments