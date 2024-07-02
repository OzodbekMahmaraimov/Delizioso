import { useState } from "react";
import styles from "../../utils/styles";
import Button from "../button/Button";
import Card from "../card/card";
import Pagination from "../pagination/pagination";
import homeImg from "../../assets/home.png";

const Menu = ({name}) => {
  const [foods, setFoods] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const chooseFoods = (food) => setFoods(food);

  const cards = [
    {
      id: 1,
      img: homeImg,
      alt: "Spaghetti",
      name: "Spaghetti",
      star: 5,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
      price: "$12.05",
      category: "dinner",
    },
    {
      id: 2,
      img: homeImg,
      alt: "Gnocchi",
      name: "Gnocchi",
      star: 4,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
      price: "$12.05",
      category: "lunch",
    },
    {
      id: 3,
      img: homeImg,
      alt: "Ravioli",
      name: "Ravioli",
      star: 5,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
      price: "$12.05",
      category: "dessert",
    },
    {
      id: 4,
      img: homeImg,
      alt: "Penne Alla Vodka",
      name: "Penne Alla Vodka",
      star: 3,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
      price: "$12.05",
      category: "drink",
    },
    {
      id: 5,
      img: homeImg,
      alt: "Risoto",
      name: "Risoto",
      star: 4,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
      price: "$12.05",
      category: "dinner",
    },
    {
      id: 6,
      img: homeImg,
      alt: "Splitza Signature",
      name: "Splitza Signature",
      star: 5,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam.",
      price: "$12.05",
      category: "lunch",
    },
  ];

  return (
    <section className={`${styles.container} px-4 sm:px-6 lg:px-8`}>
      <h2 className={`${styles.heading} text-center`}>{name}</h2>
      <div className="flex flex-wrap justify-around mt-10 gap-4">
        <Button
          onClick={() => chooseFoods("all")}
          className={`px-10 ${
            foods === "all" ? "bg-[#311F09] text-white" : "bg-[#FBFAFA]"
          } hover:bg-[#311F09] hover:text-white`}
        >
          All categories
        </Button>
        <Button
          onClick={() => chooseFoods("dinner")}
          className={`px-10 ${
            foods === "dinner" ? "bg-[#311F09] text-white" : "bg-[#FBFAFA]"
          } hover:bg-[#311F09] hover:text-white`}
        >
          Dinner
        </Button>
        <Button
          onClick={() => chooseFoods("lunch")}
          className={`px-10 ${
            foods === "lunch" ? "bg-[#311F09] text-white" : "bg-[#FBFAFA]"
          } hover:bg-[#311F09] hover:text-white`}
        >
          Lunch
        </Button>
        <Button
          onClick={() => chooseFoods("dessert")}
          className={`px-10 ${
            foods === "dessert" ? "bg-[#311F09] text-white" : "bg-[#FBFAFA]"
          } hover:bg-[#311F09] hover:text-white`}
        >
          Dessert
        </Button>
        <Button
          onClick={() => chooseFoods("drink")}
          className={`px-10 ${
            foods === "drink" ? "bg-[#311F09] text-white" : "bg-[#FBFAFA]"
          } hover:bg-[#311F09] hover:text-white`}
        >
          Drink
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {cards
          .filter((card) => foods === "all" || card.category === foods)
          .map((item) => (
            <Card
              key={item.id}
              alt={item.alt}
              src={item.img}
              name={item.name}
              star={item.star}
              price={item.price}
            >
              {item.paragraph}
            </Card>
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Menu;
