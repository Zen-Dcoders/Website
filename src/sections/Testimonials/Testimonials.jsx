// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Testimonials Data
const testimonialsData = [
  {
    image: 'https://res.cloudinary.com/dn2609yjq/image/upload/v1731734045/harsha_bifcsr.jpg',
    text: "ZenDcoders exceptional collaboration in developing the website for Wanderease India Pvt Ltd. Your expertise and innovation have greatly enhanced our online presence, helping us provide seamless travel experiences and we sincerely appreciate your hardwork and professionalism, and we look forward to our continued partnership.",
    name: "Harsha Vardhan Reddy",
    position: "Founder, Wanderease India PVT LTD",
  },
  // Uncomment the next testimonial for testing with multiple items
  // {
  //   image: 'https://via.placeholder.com/150',
  //   text: "Another testimonial text goes here.",
  //   name: "John Doe",
  //   position: "CEO, Example Co.",
  // },
];

// Testimonials Component
const Testimonials = () => {
  const isSingleSlide = testimonialsData.length === 1;

  const settings = {
    dots: true,
    infinite: !isSingleSlide, // Disable infinite scrolling for a single slide
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isSingleSlide, // Disable autoplay for a single slide
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-[15vmin] mb-[5vmin] flex flex-col items-center">
      <h1 className="saii text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#ffffff] mb-[5vmin]">
                    TESTIMONIALS
                    </h1>
      <Slider {...settings}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="text-center p-6">
            {/* Testimonial Image */}
            <div className="flex justify-center mb-4">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            
            {/* Testimonial Text */}
            <p className="text-white text-lg leading-relaxed mb-4 text-center">
              {testimonial.text}
            </p>
            
            {/* Testimonial Author */}
            <h3 className="text-white font-semibold text-xl">{testimonial.name}</h3>
            <p className="text-white text-sm">{testimonial.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
