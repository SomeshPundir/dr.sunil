"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Helper to get initials from name
const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const testimonials = [
  {
    name: "Amit Sharma",
    feedback: "Dr. Sunil is very knowledgeable and caring. He explained my kidney condition in detail and made me feel comfortable throughout the treatment.",
    location: "Lucknow, Uttar Pradesh",
    rating: 5
  },
  {
    name: "Priya Verma",
    feedback: "I am grateful for Dr. Sunil's expertise in managing my CKD. His approach is both professional and compassionate.",
    location: "Kanpur, Uttar Pradesh",
    rating: 5
  },
  {
    name: "Rahul Singh",
    feedback: "The best nephrologist I have met. Dr. Sunil listens patiently and provides clear guidance. Highly recommended!",
    location: "Delhi",
    rating: 4
  },
  {
    name: "Suman Gupta",
    feedback: "Thanks to Dr. Sunil, my dialysis process has become much smoother. He is always available for his patients.",
    location: "Noida, Uttar Pradesh",
    rating: 5
  },
  {
    name: "Vikas Yadav",
    feedback: "Dr. Sunil performed my renal biopsy with utmost care. The entire experience was stress-free.",
    location: "Gurugram, Haryana",
    rating: 4
  },
  {
    name: "Meena Tiwari",
    feedback: "I appreciate Dr. Sunil's dedication and the way he explains every aspect of the treatment. My health has improved a lot.",
    location: "Ghaziabad, Uttar Pradesh",
    rating: 5
  },
  {
    name: "Rohit Mishra",
    feedback: "Very professional and empathetic doctor. He helped me recover from a severe UTI quickly.",
    location: "Chandigarh",
    rating: 4
  },
  {
    name: "Anjali Saxena",
    feedback: "Dr. Sunil is always approachable and answers all queries patiently. I trust him completely for my kidney care.",
    location: "Dehradun, Uttarakhand",
    rating: 5
  },
  {
    name: "Deepak Kumar",
    feedback: "His expertise in nephrology is unmatched. I am thankful for his timely intervention in my case.",
    location: "Jaipur, Rajasthan",
    rating: 5
  },
  {
    name: "Shalini Pandey",
    feedback: "Dr. Sunil's positive attitude and encouragement helped me a lot during my treatment. Highly recommended!",
    location: "Shimla, Himachal Pradesh",
    rating: 5
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]
};

const clampStyle = {
  display: "-webkit-box",
  WebkitLineClamp: 5,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  minHeight: "7.5em", // Ensures equal height for 5 lines (adjust as needed)
  maxHeight: "7.5em"
};

const renderStars = (rating) => (
  <div style={{ color: "#FFD700", fontSize: "1.2rem", marginBottom: 8 }}>
    {[1, 2, 3, 4, 5].map((star) =>
      star <= rating ? <span key={star}>★</span> : <span key={star}>☆</span>
    )}
  </div>
);

const Testimonial = () => (
  <section className="section testimonial" id="testimonial">
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-7 text-center">
          <h2 className="mb-2">Patient Testimonials</h2>
          <div className="divider mx-auto my-4"></div>
          <p>What our patients say about Dr. Sunil at Velmed Hospitals</p>
        </div>
      </div>
      <Slider {...settings}>
        {testimonials.map((t, idx) => (
          <div key={idx}>
            <div className="testimonial-block p-4 h-100 shadow rounded m-2 d-flex flex-column align-items-center">
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#007bff22",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "2rem",
                  color: "#007bff",
                  marginBottom: 16,
                  userSelect: "none"
                }}
              >
                {getInitials(t.name)}
              </div>
              {renderStars(t.rating)}
              <p className="mb-3 text-center" style={clampStyle}>
                "{t.feedback}"
              </p>
              <h5 className="mb-0 text-center">{t.name}</h5>
              <small className="text-muted text-center">{t.location}</small>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default Testimonial;