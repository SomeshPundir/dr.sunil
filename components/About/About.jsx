import React from 'react'

const highlightStyle = {
  background: "#fff3cd",
  padding: "0 0.2em",
  borderRadius: "0.2em",
  fontWeight: "bold"
};

const About = () => {
  return (
    <>
      <section className="section about" id='about'>
        <div className="container position-relative">
          {/* Section 1: About Dr. Sunil */}
          <div className="row align-items-center mb-5">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="d-flex flex-column justify-content-center h-100">
                <h2 className="about-heading">About Dr. Sunil</h2>
                <p className="about-sub-heading my-2">
                  <strong>Dr. Sunil</strong> is a permanent full-time faculty and Head of Nephrology & Transplant Unit at <span style={highlightStyle}>Velmed (The Indus Group Hospital), Dehradun</span>.
                </p>
                <p className="about-sub-heading my-2">
                  He is also a visiting faculty at leading corporate hospitals in Dehradun, including:
                  <ul>
                    <li>Aviral Hospital</li>
                    <li>Sunanda Hospital</li>
                    <li><span style={highlightStyle}>Velmed Hospital</span></li>
                    <li>Shubharti Hospital</li>
                  </ul>
                </p>
                <p className="about-sub-heading my-2">
                  Runs <span style={highlightStyle}>Doon Super Speciality (Multi-Speciality) Clinic</span> in Dabawala, Race Course Road, Dehradun, collaborating with multiple super-specialists.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img src="/images/about/profile-1.jpg" alt="Dr. Sunil" className="img-fluid about-img rounded shadow" />
            </div>
          </div>
          {/* Section 2: Memberships & Achievements */}
          <div className="row align-items-center mb-5 flex-row-reverse">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="d-flex flex-column justify-content-center h-100">
                <h3 className="about-heading">Professional Memberships & Achievements</h3>
                <ul>
                  <li>Active member, <span style={highlightStyle}>Delhi Nephrology Society (DNS)</span> (5+ years)</li>
                  <li>Member, Asian Society of Peritoneal Dialysis (ASPD)</li>
                  <li>Certified in CAPD Placement by PDSI</li>
                  <li>Member, <span style={highlightStyle}>ISN</span> (Indian Society of Nephrology) & <span style={highlightStyle}>ISOT</span> (Indian Society of Organ Transplantation)</li>
                  <li>Fellowship in Transplant Immunology & Pathology by ISOT (IKDRC, Ahmedabad)</li>
                </ul>
                <span>Participated in multiple national & international conferences, including the World Congress on Nephrology (2025).</span>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img src="/images/about/ISN.png" alt="Memberships" className="img-fluid about-img rounded shadow" />
            </div>
          </div>
          {/* Section 3: Training & Experience */}
          <div className="row align-items-center mb-5">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="d-flex flex-column justify-content-center h-100">
                <h3 className="about-heading">Training & Experience</h3>
                <ul>
                  <li>Nephrology training at <span style={highlightStyle}>Artemis International Hospital, Gurgaon</span> (India’s first JCI-accredited hospital)</li>
                  <li>Specialized in critical care nephrology and renal transplantation research</li>
                  <li>10+ years experience in government & corporate sectors</li>
                  <li>Former Physician & Critical Care ICU specialist at:
                    <ul>
                      <li><span style={highlightStyle}>Central Railway Hospital, New Delhi</span></li>
                      <li>Old Delhi Police Hospital, Delhi</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img src="/images/about/doct.png" alt="Experience" className="img-fluid about-img rounded shadow" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About