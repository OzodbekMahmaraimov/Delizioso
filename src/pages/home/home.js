import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/navbar";
import homeImg from "../../assets/home.png";
import styles from "../../utils/styles";
import welcomeImg from "../../assets/welcome.png";
import Menu from "../../components/menu/menu";
import Roundimg from "../../components/round-img/round-img";
import Chef from "../../components/chef/chef";
import chef1 from "../../assets/shef1.png";
import chef2 from "../../assets/shef2.png";
import chef3 from "../../assets/shef3.png";
import { useState } from "react";

// testimonial images
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";
import testimonial3 from "../../assets/testimonial3.png";
import testimonial4 from "../../assets/testimonial4.png";
import testimonial5 from "../../assets/testimonial5.png";
import testimonial6 from "../../assets/testimonial6.png";
import testimonial7 from "../../assets/testimonial7.png";

// Testimonials
const testimonials = [
  {
    name: "Heidi Parra",
    title: "Financial advisor",
    image: testimonial1, // Replace with the actual path to the image
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam.",
  },
  {
    name: "Vera Scott",
    title: "Financial advisor",
    image: testimonial2, // Replace with the actual path to the image
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam.",
  },
  {
    name: "Gemma West",
    title: "Financial advisor",
    image: testimonial3, // Replace with the actual path to the image
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam.",
  },
  {
    name: "Ellie Jenkins",
    title: "Financial advisor",
    image: testimonial4, // Replace with the actual path to the image
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam.",
  },
  {
    name: "Abigail Flynn",
    title: "Financial advisor",
    image: testimonial5, // Replace with the actual path to the image
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam.",
  },
  {
    name: "Noelle Mendoza",
    title: "Financial advisor",
    image: testimonial6, // Replace with the actual path to the image
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam.",
  },
  {
    name: "Payton Sellers",
    title: "Financial advisor",
    image: testimonial7, // Replace with the actual path to the image
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam.",
  },
];

const Home = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[3]
  );

  const handleTestimonialClick = (index) => {
    setSelectedTestimonial(testimonials[index]);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* /Navbar */}

      {/* Home */}
      <main
        className={`${styles.container}  py-10 flex flex-col lg:flex-row items-center gap-10 lg:px-5`}
      >
        <div className="flex flex-col gap-10">
          <div>
            <span className="py-[0.7rem] px-10 rounded-3xl bg-[#FFE6D6] text-[#FF8A00]">
              Restauran
            </span>
          </div>
          <h1 className={styles.heading}>Italian Cuisine</h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            senectus dictum arcu sit tristique donec eget.
          </p>
          <div className="flex sm:flex-row justify-center lg:justify-start gap-5">
            <Button className={"bg-[#FF8A00] px-8 text-white md:px-10"}>
              Order now
            </Button>
            <Button className={"bg-[#3FA72F] px-8 text-white md:px-10"}>
              Reservation
            </Button>
          </div>
        </div>

        <div>
          <img className="mx-auto w-full lg:w-auto" src={homeImg} alt="meal" />
        </div>
      </main>
      {/* /Home */}

      {/* Welcome */}
      <section
        className={`${styles.container} my-20 bg-[#ECFAF1] grid grid-cols-1 lg:grid-cols-2 py-20`}
      >
        <div className="flex justify-center lg:justify-end order-1 md:order-none">
          <img
            className="w-[100%] lg:w-[120%]"
            src={welcomeImg}
            alt="welcome img"
          />
        </div>
        <div className="flex flex-col justify-between gap-10 md:gap-0 px-5 lg:px-0">
          <h2 className={styles.heading}>
            Welcome to <span className="text-[#FF8A00]">delizioso</span>
          </h2>
          <p className={`${styles.paragraph} lg:pe-5`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam{" "}
          </p>
          <div>
            <Button className="bg-[#FF8A00] px-10 text-white">
              See our menu
            </Button>
          </div>
        </div>
      </section>
      {/* /Welcome */}

      {/* Popular menu */}
      <Menu />
      {/* /Popular menu */}

      {/* Table */}
      <section
        className={`${styles.container} my-20 py-20 bg-[#FFF4E7] grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
      >
        {/* Text Content */}
        <div className="flex flex-col md:order-1 gap-10 px-5">
          <h2 className={`${styles.heading}`}>
            Let's reserve <span className="text-[#FF8A00]">a table</span>
          </h2>
          <p className={`${styles.paragraph} pe-5`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>
          <div className="flex justify-center md:justify-start">
            <Button className={"bg-[#FF8A00] px-10 text-white"}>
              Reservation
            </Button>
          </div>
        </div>

        {/* Image */}
        <Roundimg className="md:order-2" />
      </section>
      {/* Table */}

      {/* Chefs */}
      <section className={`${styles.container} my-20`}>
        <h2 className={`${styles.heading} text-center`}>Our greatest chef</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-16 text-center">
          <Chef
            bgColor={"bg-[#D1D0D2]"}
            src={chef1}
            name="Betran Komar"
            job={"Head chef"}
          />
          <Chef
            bgColor={"bg-[#FFE8CC]"}
            src={chef2}
            name="Ferry Sauwi"
            job={"Chef"}
          />
          <Chef
            bgColor={"bg-[#EBE0D9]"}
            src={chef3}
            name="Iswan Dracho"
            job={"Chef"}
          />
        </div>
      </section>
      {/* Chefs */}

      {/* Customers opinion */}
      <section className={`${styles.container} my-20`}>
        <h2 className={`${styles.heading} text-center`}>Our customers say</h2>
        <div className="text-center font-poppins">
          <img
            className="mx-auto w-[40%] sm:w-[30%] md:w-[20%] object-cover rounded-full my-10"
            src={selectedTestimonial.image}
            alt={selectedTestimonial.name}
          />
          <h3 className="text-[#311F09] text-2xl py-5">
            {selectedTestimonial.name}
          </h3>
          <h4 className="text-[#5C4529] text-xl">
            {selectedTestimonial.title}
          </h4>
          <blockquote className="leading-9 after:right-0 after:bottom-0 after:content-['“'] md:before:left-[-2rem] before:left-0 before:top-[1rem] quote md:after:right-[-2rem] md:after:bottom-[-1rem] before:content-['“'] relative w-full md:w-2/3 lg:w-1/2 mx-auto font-normal text-lg py-16">
            {selectedTestimonial.quote}
          </blockquote>
        </div>
        <div className="flex justify-around flex-wrap mx-auto mt-20">
          {testimonials.map((testimonial, index) => (
            <img
              key={index}
              className={`${
                selectedTestimonial === testimonial
                  ? "drop-filter drop-shadow-xl ring-2 ring-primary"
                  : ""
              } w-[4rem] sm:w-[6rem] md:w-[8rem] rounded-full object-cover cursor-pointer m-2`}
              src={testimonial.image}
              alt={testimonial.name}
              onClick={() => handleTestimonialClick(index)}
            />
          ))}
        </div>
      </section>
      {/* /Customers opinion */}

      {/* Open time */}
      <section
        className={`${styles.container} rounded-[3rem] py-16 my-20 text-center text-white open`}
      >
        <h2 className={`${styles.heading}`}>We are open from</h2>
        <h3 className="font-poppins text-2xl font-semibold py-4">
          Monday-Sunday
        </h3>
        <p className="font-normal text-lg py-1">
          Lunch: Mon-Sun: 11:00am-02:00pm
        </p>
        <p className="text-lg py-1">Dinner: Sunday: 04:00pm-08:00pm</p>
        <p className="text-lg py-1">Other days: 04:00pm-09:00pm</p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button className={"px-10 py-2 bg-[#FF8A00] text-white rounded-full"}>
            Order now
          </Button>
          <Button className={"px-10 py-2 bg-white text-black rounded-full"}>
            Reservation
          </Button>
        </div>
      </section>
      {/* /Open time */}
    </>
  );
};

export default Home;
