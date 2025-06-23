import React from 'react'

const Features = () => {
 return (
  <>
   <section className="features">
    <div className="container">
     <div className="row">
      <div className="col-lg-12">
       <div className="feature-block d-lg-flex">
        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-4">
          <i className="icofont icofont-stethoscope-alt"></i>
         </div>
         <span>Specialized Kidney Care</span>
         <h4 className="mb-3">Expert Nephrology Services</h4>
         <p className="mb-4">Comprehensive diagnosis and treatment for all kidney-related conditions, provided by an experienced nephrologist at Velmed Hospitals.</p>
        </div>

        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-4">
          <i className="icofont icofont-ui-clock"></i>
         </div>
         <span>Timing Schedule</span>
         <h4 className="mb-3">Working Hours</h4>
         <ul className="w-hours list-unstyled">
          <li className="d-flex justify-content-between">Mon-Sat : <span>9:00 AM-5:00 PM</span></li>
          <li className="d-flex justify-content-between">Sunday : <span>Closed</span></li>
         </ul>
        </div>

        <div className="feature-item mb-5 mb-lg-0">
         <div className="feature-icon mb-4">
          <i className="icofont icofont-support"></i>
         </div>
         <span>Emergency Cases</span>
         <h4 className="mb-3">Call Velmed Hospitals</h4>
         <p>For emergencies, please call <strong>7251999161</strong> or email <a href="mailto:info@velmedhospitals.com">info@velmedhospitals.com</a>. Our team is ready to assist you promptly.</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Features