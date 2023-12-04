import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '/src/assets/vendor/animate.css/animate.min.css'
import '/src/assets/vendor/aos/aos.css'
import '/src/assets/vendor/bootstrap/css/bootstrap.min.css'
import '/src/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '/src/assets/vendor/boxicons/css/boxicons.min.css'
import '/src/assets/vendor/glightbox/css/glightbox.min.css'
import '/src/assets/vendor/swiper/swiper-bundle.min.css'
import '/src/assets/vendor/fontawesome-free/css/all.min.css'
import '/src/assets/css/style.css'


import AOS from 'aos';
import 'bootstrap';
import GLightbox from 'glightbox';

// Initialize scripts as needed
AOS.init();
GLightbox();

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
