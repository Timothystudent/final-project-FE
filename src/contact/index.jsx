import React from 'react'
import { useState } from 'react';

const Contact = () => {
  const [user, setUser] = useState({
    name: '', email: '', subject: '', message: '' 
    }
  )
  let name, value;
  console.log(user);
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value});
  }
  const getdata = async (e) => {
    const {name, email, subject, message} = user;
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({
        name, email, subject, message
      })
    }
    const res = await fetch('https://finalfrontend-f7191-default-rtdb.firebaseio.com/ContactData.json',
    options
    )
    console.log(res)
    if (res) {
      alert("Data Submitted!")
    }
    else{
      alert("Error Occured!")
    }
  }

  return (
    <>
     {/* ======= Contact Section ======= */}
     <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p> Terdapat Informasi tentang lokasi klinik dan Pasien atau pengunjung dapat mengirim pesan lewat form yang tersedia dibawah.
          </p>
        </div>
      </div>
      <div>
        <iframe style={{border: 0, width: '100%', height: 350}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d533.139891857968!2d124.98244870659029!3d1.417589701613566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1701618217660!5m2!1sen!2sid" frameBorder={0} allowFullScreen />
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map" />
                  <h3>Our Address</h3>
                  <p>Didepan Asrama Jasmine, Gedung Kuliah 2, Universitas Klabat.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope" />
                  <h3>Email Us</h3>
                  <p>infouclinic@gmail.com<br />uclinic@gmail.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-phone-call" />
                  <h3>Call Us</h3>
                  <p>+62 8956 3003 3991</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={user.name} required onChange={data} />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={user.email} required onChange={data} />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={user.subject} required onChange={data} />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={7} placeholder="Message" value={user.message} required onChange={data} />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button onClick={getdata}type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>{/* End Contact Section */}
    </>
  )
}

export default Contact