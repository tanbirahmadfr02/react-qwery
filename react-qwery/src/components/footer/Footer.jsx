import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <section id="footer">
    <div className="container">
      <div className="footerTop">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-4">
            <a href="#">
              <img src= {logo} alt="logo"/>
            </a>
          </div>
          <div className="col-lg-6 offset-lg-4 col-md-8">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <h6>Ready to explore?</h6>
              </div>
              <div className="col-lg-6 col-md-6">
                <a className="footerBtn" href="#">Get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="row">
          <div className="col-lg-4">
            <div className="left">
              <h5>Let's go on vacation, Make your day</h5>
              <a className="terms" href="#">Terms & Conditions</a>
              <div className="icons">
                <div className="icon">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                </div>
                <div className="icon">
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                </div>
                <div className="icon">
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-2">
            <div className="right">
              <div className="item">
                <h4>Services</h4>
                <ul>
                  <li>
                    <a href="#">Email Marketing</a>
                  </li>
                  <li>
                    <a href="#">Campaigns</a>
                  </li>
                  <li>
                    <a href="#">Branding</a>
                  </li>
                  <li>
                    <a href="#">Offline</a>
                  </li>
                </ul>
              </div>
              <div className="item">
                <h4>About</h4>
                <ul>
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                  <li>
                    <a href="#">Term</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                </ul>
              </div>
              <div className="item">
                <h4>Help</h4>
                <ul>
                  <li>
                    <a href="#">FAQ’S</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2023 QWERy</p>
      </div>
    </div>
  </section>
  )
}

export default Footer