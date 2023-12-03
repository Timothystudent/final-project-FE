import React from 'react'
import { useState } from 'react';

const Appointment = () => {
  const [user, setUser] = useState({
    name: '', email: '', phone: '', date: '', message: '' 
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
    const {name, email, phone, date, message} = user;
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify({
        name, email, phone, date, message
      })
    }
    const res = await fetch('https://finalfrontend-f7191-default-rtdb.firebaseio.com/AppointmentData.json',
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
       {/* ======= Appointment Section ======= */}
       <section id="appointment" className="appointment section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Make an Appointment</h2>
          <p>Buat janji temu dengan Dokter.</p>
        </div>
        <form action="forms/appointment.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
          <div className="row">
            <div className="col-md-4 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" value={user.name} required onChange={data} />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={user.email} required onChange={data} />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" value={user.phone} required onChange={data} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" value={user.date} required onChange={data} />
            </div>
            <div className="col-md-4 form-group mt-3">
              {/* <select name="department" id="department" className="form-select" value={user.department}>
                <option value>Select Department</option>
                <option value="Department 1">None</option>
              </select> */}
            </div>
            <div className="col-md-4 form-group mt-3">
              {/* <select name="doctor" id="doctor" className="form-select" value={user.doctor} required onChange={data}>
                <option value>Select Doctor</option>
                <option value="">dr. Nancy Sampouw, M.Kes</option>
              </select> */}
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" value={user.message} required onChange={data} />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
          </div>
          <div className="text-center"><button onClick={getdata} type="submit">Make an Appointment</button></div>
        </form>
      </div>
    </section>{/* End Appointment Section */}
   </>
  )
}

export default Appointment