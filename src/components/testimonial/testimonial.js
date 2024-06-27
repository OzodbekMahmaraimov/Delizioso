import React, { useState } from "react";
import img1 from "../../assets/shef1.png";
import img2 from "../../assets/shef2.png";
import img3 from "../../assets/shef3.png";

const testimonials = [
  {
    name: "Starla Virgoun",
    title: "Financial advisor",
    image: img1, // Replace with the actual path to the image
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam.",
  },
  {
    name: "Virgoun",
    title: "Financial advisor",
    image: img2, // Replace with the actual path to the image
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam.",
  },
  {
    name: "Starla",
    title: "Financial advisor",
    image: img3, // Replace with the actual path to the image
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam.",
  },
];

const TestimonialSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0]
  );

  const handleTestimonialClick = (index) => {
    setSelectedTestimonial(testimonials[index]);
  };

  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our customers say</h2>
      <div className="flex flex-col items-center">
        <div className="relative mb-8 text-center">
          <img
            src={selectedTestimonial.image}
            alt={selectedTestimonial.name}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <p className="text-xl font-semibold">{selectedTestimonial.name}</p>
          <p className="text-gray-500">{selectedTestimonial.title}</p>
          <blockquote className="text-gray-700 mt-4">
            <p className="text-center">
              &ldquo;{selectedTestimonial.quote}&rdquo;
            </p>
          </blockquote>
        </div>
        <div className="flex space-x-4 mt-8">
          {testimonials.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.image}
              alt={testimonial.name}
              className={`w-16 h-16 rounded-full object-cover cursor-pointer ${
                selectedTestimonial === testimonial ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleTestimonialClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
