import React from 'react'
import { GiKidneys } from 'react-icons/gi'
import { FaUserDoctor } from "react-icons/fa6";


const Services = () => {
 return (
  <>
   <section className="section service gray-bg" id='services'>
    <div className="container">
     <div className="row justify-content-center">
      <div className="col-lg-7 text-center">
       <div className="section-title">
        <h2>Nephrology Services</h2>
        <div className="divider mx-auto my-4"></div>
        <p>Specialized Kidney Care at Velmed Hospital</p>
       </div>
      </div>
     </div>

     <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-laboratory text-lg"></i>
         <h4 className="mt-3 mb-3">Kidney Function Evaluation</h4>
        </div>
        <div className="content">
         <p className="mb-4">Comprehensive assessment of kidney health, including blood and urine tests to detect kidney disease early.</p>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-heart-beat-alt text-lg"></i>
         <h4 className="mt-3 mb-3">Dialysis Management</h4>
        </div>
        <div className="content">
         <p className="mb-4">Personalized dialysis planning, initiation, and ongoing management for patients with advanced kidney failure.</p>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <GiKidneys className="text-lg" />
         <h4 className="mt-3 mb-3">Hypertension Management</h4>
        </div>
        <div className="content">
         <p className="mb-4">Expert care for high blood pressure, especially related to kidney disease, to prevent complications.</p>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-crutch text-lg"></i>
         <h4 className="mt-3 mb-3">Chronic Kidney Disease (CKD) Care</h4>
        </div>
        <div className="content">
         <p className="mb-4">Long-term management and monitoring of chronic kidney disease to slow progression and improve quality of life.</p>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <FaUserDoctor className="text-lg" />
         <h4 className="mt-3 mb-3">Kidney Transplant Follow-up</h4>
        </div>
        <div className="content">
         <p className="mb-4">Post-transplant care and monitoring to ensure the health and longevity of kidney transplant recipients.</p>
        </div>
       </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-6">
       <div className="service-item mb-4">
        <div className="icon d-flex align-items-center">
         <i className="icofont icofont-dna-alt-1 text-lg"></i>
         <h4 className="mt-3 mb-3">Urinary Tract Disorders</h4>
        </div>
        <div className="content">
         <p className="mb-4">Diagnosis and treatment of urinary tract infections, kidney stones, and other related disorders.</p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 )
}

export default Services