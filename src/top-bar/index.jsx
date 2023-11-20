import React from 'react'

const TopBar = () => {
  return (
    <>
    <div id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
      <div className="align-items-center d-none d-md-flex">
        <i className="bi bi-clock" /> Monday - Saturday, 8AM to 10PM
      </div>
      <div className="d-flex align-items-center">
        <i className="bi bi-phone" /> Call us now +1 5589 55488 55
      </div>
    </div>
  </div>
    </>
  )
}

export default TopBar