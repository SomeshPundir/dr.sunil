import React from 'react'

const HeroBanner = () => {
  return (
    <>
      <section className="banner" id='heroBanner'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xl-7">
              <div className="block">
                <div className="divider mb-3"></div>
                {/* <span className="text-uppercase text-sm letter-spacing text-primary">
                  Nephrology Expertise & Compassionate Kidney Care
                </span> */}
                <h1 className="mb-3 mt-3">
                  Good Health Moves<br />Us Forward
                </h1>
                <p className="mb-4 pr-5">
                  Dr. Sunil – Dedicated to the prevention, diagnosis, and treatment of kidney diseases.<br />
                  <em className="text-secondary">
                    "Healthy kidneys, healthy life."
                  </em>
                </p>
                <div className="btn-container ">
                  {/* <a href="appoinment.html" target="_blank" className="btn btn-main-2 btn-icon btn-round-full">Make appoinment
                    <i className="icofont icofont-simple-right ml-2  "></i></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroBanner
