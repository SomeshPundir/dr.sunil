import React from 'react'

const About = () => {
 return (
  <>
   <section className="section about" id='about'>
    <div className="container position-relative">
     <div className="row">
      <div className="col-12 col-md-8 col-lg-6">
       <div className="d-flex flex-column justify-content-center h-100">
        <h2 className="about-heading">About Dr. Sunil</h2>
        <p className="about-sub-heading my-2">
         Dr. Sunil is a dedicated and experienced nephrologist with MBBS, DNB, and DrNB qualifications. With a strong academic background and years of clinical expertise, he specializes in the diagnosis and management of kidney-related disorders.
        </p>
        <p className="about-sub-heading my-2">
         Dr. Sunil is committed to providing comprehensive kidney care, including the management of acute kidney disease, chronic kidney disease (CKD), glomerulonephritis, and urinary tract infections (UTI). He is highly skilled in performing renal biopsies and the placement of permacath for dialysis access.
        </p>
        <p className="about-sub-heading my-2">
         His approach combines advanced medical knowledge with compassionate patient care, ensuring that each patient receives a personalized treatment plan. Dr. Sunil is known for his clear communication, empathy, and dedication to improving the quality of life for his patients.
        </p>
        <p className="about-sub-heading my-2">
         <strong>Services:</strong> Acute Kidney Disease, Dialysis, Glomerulonephritis, Urinary Tract Infections (UTI), Chronic Kidney Disease (CKD), Permacath Insertion, Renal Biopsy.
        </p>
       </div>
      </div>
      <div className="col-12 col-md-6">
       <img src="/images/about/profile-1.jpg" alt="" className="img-fluid about-img" />
      </div>
     </div>
    </div>
   </section>
  </>
 )
}
export default About