import React from 'react'

const Appoinment = () => {
 return (
  <>
   <section className="section appoinment" id='appoinment'>
    <div className="container">
     <div className="row align-items-center">
      <div className="col-lg-6 ">
       <div className="appoinment-content">
        <img src="/images/about/profile-1.jpg" alt="" className="img-fluid" />
        <div className="emergency">
         <h2 className="text-lg">
          <i className="icofont icofont-phone-circle text-lg"></i> 98702777114
         </h2>
         <p className="mt-3 mb-1"><strong>Hospital:</strong> Velmed Hospitals</p>
         <p className="mb-1"><strong>Email (Hospital):</strong> <a href="mailto:info@velmedhospitals.com">info@velmedhospitals.com</a></p>
         <p className="mb-1"><strong>Email (Dr. Sunil):</strong> <a href="mailto:snlsingh89@gmail.com">snlsingh89@gmail.com</a></p>
        </div>
       </div>
      </div>
      <div className="col-lg-6 col-md-10 ">
       <div className="appoinment-wrap mt-5 mt-lg-0">
        <h2 className="mb-2 title-color">Book Appointment</h2>
        <p className="mb-4">
         To book an appointment with Dr. Sunil at Velmed Hospitals, please call <strong>98702777114</strong> or email us at <a href="mailto:info@velmedhospitals.com">info@velmedhospitals.com</a>.<br />
         For personal queries, you may also email <a href="mailto:snlsingh89@gmail.com">snlsingh89@gmail.com</a>.
        </p>
        {/* <a className="btn btn-main btn-round-full" href="mailto:info@velmedhospitals.com,snlsingh89@gmail.com?subject=Appointment%20Request">
         Email for Appointment <i className="icofont icofont-simple-right ml-2"></i>
        </a> */}
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Appoinment