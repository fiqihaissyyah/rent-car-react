import React from 'react'
import '../assets/styles/Landing.css'
import logo from '../assets/images/logo.png'
import car from '../assets/images/img_car.png'
import service from '../assets/images/img_service.png'
import checklist from '../assets/images/checklist.svg'
import DataVisualization from '../components/DataVisualization'

const Landing = () => {
  return (
    <div>
        <div className="mainsection">
        <div className="navigasi">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                <div className="container-fluid container-xl">
                  <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Our Services</a></li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Why Us</a></li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Testimonial</a></li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">FAQ</a></li>
                        <li><button className="btn btn-green" type="button">Registrasi</button></li>
                    </ul>
                  </div>
                </div>
              </nav>
        </div>

        {/* <!-- bagian hero --> */}
        <div className="herosection">
            <div className="brand">
                <h1>Sewa & Rental Mobil Terbaik di kawasan Surabaya</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <button className="btn btn-green" type="button">Mulai Sewa Mobil</button>
            </div>
            <div className="img">
                <img src={car} alt=""/>
            </div>
        </div>
    </div>
    <div className="Ourservice-section">
        <div className="imgservice">
            <img src={service} alt=""/>
        </div>
        <div className="desc">
            <div className="textbranding">
                <h2>Best car rental for any kind of trip in Surabaya</h2>
            </div>
            <div className="service">
                <p>Sewa Mobil di Surabaya bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain. Kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <div className="listservice">
                    <ul>
                        <li><img src={checklist} alt=""/> Sewa Mobil Dengan Supir di Surabaya 12 jam</li>
                        <li><img src={checklist} alt=""/> Sewa Mobil Lepas Kunci di Surabaya 12 jam</li>
                        <li><img src={checklist} alt=""/> Sewa Mobil jangka Panjang Bulanan</li>
                        <li><img src={checklist} alt=""/> Gratis Antar-Jemput Mobil di Bandara</li>
                        <li><img src={checklist} alt=""/> Layanan Airport Transfer/Drop In Out</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <DataVisualization/>
    </div>
  )
}

export default Landing