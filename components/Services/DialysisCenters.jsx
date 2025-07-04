"use client"
import React from "react";

const hospitals = [
  {
    name: "Aviral Hospital",
    color: "#007bff",
    location: "Haridwar Rd, Shastri Nagar, Dehradun",
    mapUrl: "https://maps.app.goo.gl/8S9jQfUKXNmzX6gF8"
  },
  {
    name: "Sunanda Hospital",
    color: "#28a745",
    location:"Ashwani Enclave,Shimla Bypass Rd, Sewla Kalan, Dehradun",
    mapUrl: "https://maps.app.goo.gl/uQN1XqLim21gk6AMA"
  },
  {
    name: "Velmed Hospital",
    color: "#6f42c1",
    location: "Turner Rd, Morowala, Clement Town, Dehradun",
    mapUrl: "https://maps.app.goo.gl/P7p2WMRPmSR9Yr818"
  },
  {
    name: "Shubharti Hospital",
    color: "#fd7e14",
    location: "Subhartipuram,NH 72 Jhajra, Dehradun",
    mapUrl: "https://maps.app.goo.gl/CJsAMPcsDFzKsQFw7"
  }
];

const DialysisCenters = () => (
  <section className="section services" id="dialysis-centers">
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8 text-center">
          <h2 className="mb-2">Dialysis Centers </h2>
          <div className="divider mx-auto my-4"></div>
          <p>
            Dr. Sunil performs and vists for dialysis at the following hospitals in Dehradun:
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        {hospitals.map((h, idx) => (
          <div key={idx} className="col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
            <div
              style={{
                background: "#fff",
                borderRadius: "1rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                padding: "2rem 1rem",
                minWidth: "180px",
                minHeight: "120px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: `2px solid ${h.color}`,
                color: h.color,
                fontWeight: "bold",
                fontSize: "1.1rem",
                textAlign: "center",
                transition: "transform 0.2s",
              }}
              className="hospital-card"
            >
              {h.name}
              <div style={{ color: "#333", fontWeight: "normal", fontSize: "0.95rem", marginTop: "0.5rem" }}>
                {h.location}
              </div>
              <a
                href={h.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: h.color,
                  textDecoration: "underline",
                  fontSize: "0.95rem",
                  marginTop: "0.5rem"
                }}
              >
                View on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DialysisCenters;