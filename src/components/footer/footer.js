import { Link } from "react-router-dom";
import styles from "../../utils/styles";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#311F09] mt-10 lg:mt-44">
      <footer className={`${styles.container} px-4 md:px-8`}>
        <div className="grid gap-10 md:gap-12 lg:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 md:py-16 lg:py-24 font-poppins">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
            <div className="flex items-center gap-2">
              <a
                href="/"
                className="bg-[#FF8A00] py-2 px-4 rounded-full text-2xl"
              >
                D
              </a>
              <span className="font-semibold text-lg text-white">
                Delizi<span className="text-[#FF8A00]">oso</span>
              </span>
            </div>
            <p className="font-poppins font-normal text-sm md:text-base lg:text-lg leading-6 md:leading-7 lg:leading-8 text-[#E3E2E0]">
              Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
            </p>
            <div className="flex gap-3">
              <Link className="p-2 md:p-3 lg:p-4 bg-white rounded-full">
                <FaTwitter className="text-lg md:text-xl" />
              </Link>
              <Link className="p-2 md:p-3 lg:p-4 bg-white rounded-full">
                <FaInstagram className="text-lg md:text-xl" />
              </Link>
              <Link className="p-2 md:p-3 lg:p-4 bg-white rounded-full">
                <FaFacebookF className="text-lg md:text-xl" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-[#FF8A00] text-lg md:text-xl lg:text-2xl font-semibold pb-6 md:pb-8 lg:pb-10">
              Page
            </h4>
            <ul className="text-[#E3E2E0] flex flex-col gap-4 md:gap-6 lg:gap-8 text-sm md:text-base lg:text-lg">
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">Menu</Link>
              </li>
              <li>
                <Link to="#">Order online</Link>
              </li>
              <li>
                <Link to="#">Catering</Link>
              </li>
              <li>
                <Link to="#">Reservation</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#FF8A00] text-lg md:text-xl lg:text-2xl font-semibold pb-6 md:pb-8 lg:pb-10">
              Information
            </h4>
            <ul className="text-[#E3E2E0] flex flex-col gap-4 md:gap-6 lg:gap-8 text-sm md:text-base lg:text-lg">
              <li>
                <Link to="#">About us</Link>
              </li>
              <li>
                <Link to="#">Testimonial</Link>
              </li>
              <li>
                <Link to="#">Event</Link>
              </li>
            </ul>
          </div>
          <div className="text-[#E3E2E0]">
            <h4 className="text-[#FF8A00] text-lg md:text-xl lg:text-2xl font-semibold pb-6 md:pb-8 lg:pb-10">
              Get in touch
            </h4>
            <ul className="text-[#E3E2E0] flex flex-col gap-4 md:gap-6 lg:gap-8 text-sm md:text-base lg:text-lg">
              <li>3247 Johnson Ave, Bronx, NY 10463, USA</li>
              <li>delizioso@gmail.com</li>
              <li>+123 4567 8901</li>
            </ul>
          </div>
        </div>
        <div className="py-4">
          <p className="text-[#E3E2E0] text-center font-poppins text-xs md:text-sm lg:text-base">
            Copyright © 2022 Delizioso
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;