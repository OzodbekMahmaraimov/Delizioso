import Navbar from "../../components/navbar/navbar";
import Roundimg from "../../components/round-img/round-img";
import styles from "../../utils/styles";

// images
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.jpg";
import Footer from "../../components/footer/footer";

const About = () => {
  return (
    <section className="">
      <Navbar />

      <section
        className={`${styles.container} lg:pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
      >
        {/* Text Content */}
        <div className="flex flex-col md:order-1 gap-10 px-5">
          <h2 className={`${styles.heading}`}>
            Our <span className="text-[#FF8A00]">restaurant</span>
          </h2>
          <p className={`${styles.paragraph} pe-5`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>

        {/* Image */}
        <Roundimg src={about1} className="md:order-2" />
      </section>

      <section
        className={`${styles.container} py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
      >
        {/* Text Content */}
        <div className="flex flex-col gap-10 px-5">
          <p className={`${styles.paragraph} pe-5`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>

        {/* Image */}
        <Roundimg src={about2} className="" />
      </section>

      <section
        className={`${styles.container} py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
      >
        <img className="w-[70%] h-full mx-auto" src={about3} alt="about3 img" />
        <div className="flex flex-col h-full justify-between px-5">
          <h2 className={`${styles.heading}`}>
            <span className="text-[#FF8A00]">Owner </span> 
             & Executive Chef
          </h2>
          <h3 className="font-poppins text-[2.5rem] font-semibold">Ismail Marzuki</h3>
          <p className={`${styles.paragraph} italic pe-5`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default About;
