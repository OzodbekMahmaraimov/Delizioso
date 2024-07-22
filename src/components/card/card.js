import { FaStar, FaRegStar } from "react-icons/fa";
import Button from "../button/Button";

const Card = ({ src, alt, name, star, price, children, btnSize }) => {
  // Create an array with length 5, filled with the star type (filled or empty)
  const stars = Array.from({ length: 5 }, (v, i) =>
    i < star ? (
      <FaStar key={i} className="text-[#FF8A00]" />
    ) : (
      <FaRegStar key={i} />
    )
  );

  return (
    <div className="bg-[#FBFAFA] rounded-3xl pb-7">
      <img className="w-[60%] mx-auto py-7 rounded-xl" src={src} alt={alt} />
      <div className="flex flex-col items-center text-center">
        <h2 className="font-semibold text-[1.9rem]">{name}</h2>
        <div className="flex py-5 gap-5">{stars}</div>
        <p className="font-poppins font-normal text-[#59442B] leading-[28px] px-3">
          {children}
        </p>
        <div className="flex items-center w-full justify-around mt-5">
          <h3 className="font-poppins text-2xl font-semibold">{price}</h3>
          <Button
            className={`${btnSize} bg-[#FF8A00] text-white hover:bg-[#FF9A00]`}
          >
            Order now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
