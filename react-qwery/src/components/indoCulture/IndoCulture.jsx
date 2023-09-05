import React from 'react'
import indoCulture from '../../assets/indo_culture.jpg'
import './IndoCulture.css'

function IndoCulture() {
  return (
    <section id="indoCulture">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <div className="content">
            <h5>INDONESIAN CULTURE</h5>
            <h3>Our culture here is very friendly to people</h3>
            <p>known for his politeness, manners and gentleness. This becomes a characteristic when they mingle with
              other tribes and become basic traits that are passed down by their ancestors.</p>
            <a href="#">read more</a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="img">
            <img src={indoCulture} alt="image"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default IndoCulture