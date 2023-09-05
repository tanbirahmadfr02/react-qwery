import React from 'react'
import './Holyday.css'
import holyday from '../../assets/holyday.png'

function Holyday() {
  return (
    <section id="holyday">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 order-2 col-md-6 order-md-1">
          <div className="img">
            <img src= {holyday} alt="image"/>
          </div>
        </div>
        <div className="col-lg-6 order-1 col-md-6 order-md-2">
          <div className="content">
            <h5>EAST nUSA TENGGARA</h5>
            <h3 className="heading">Have you enjoyed your holiday?</h3>
            <p>You will be amazed if you take part in this sailing Komodo island tour package. So it is also mandatory
              for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste the marine tourism. The
              beautiful waters of Komodo will make you meet many travelers from other countries.</p>
            <a href="#">read more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Holyday