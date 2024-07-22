import { useState } from "react";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/navbar";
import homeImg from "../../assets/home.png";
import styles from "../../utils/styles";
import Card from "../../components/card/card";
import jsonFile from "../../db/db.json";
import OrderListItem from "../../components/order-list-item/order-list-item";
import Pagination from "../../components/pagination/pagination";

// pasta images

const OrderOnline = () => {
  const [foods, setFoods] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const chooseFoods = (food) => setFoods(food);

  const cards = {
    pasta: [
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
    ],
  };

  return (
    <section>
      <Navbar />

      <h2 className={`${styles.heading} text-center`}>Menu</h2>
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

      <div className={`${styles.container} mt-10`}>
        <h3 className="text-3xl decoration-solid underline-offset-[1rem] decoration-[#FF8A00] underline">
          Pizza
        </h3>
      </div>

      <div
        className={`${styles.container} grid grid-cols-7 gap-5 bg--700 mt-20`}
      >
        <div className=" col-span-5">
          <div className="grid grid-cols-3 gap-8">
            {jsonFile.pasta.map((item, idx) => (
              <Card
                btnSize={"px-5"}
                star={item.star}
                src={homeImg}
                price={item.price}
                name={item.name}
                alt={item.name}
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
        </div>
        <aside className="col-span-2 shadow-2xl h-auto py-5 px-5 flex flex-col gap-10 items-center">
          <Button className={"w-full bg-[#512982] text-white"}>
            Order list
          </Button>

          <OrderListItem price={"$24.1"} initialCount={2} name={"Spaghetti"} />
          <OrderListItem price={"$35.7"} initialCount={2} name={"Pizza"} />
          <OrderListItem
            price={"$18.5"}
            initialCount={2}
            name={"Caesar salad"}
          />

          <div className="flex justify-between w-full items-center">
            <h3 className="text-[32px] font-semibold">Total</h3>
            <h3 className="text-2xl text-[#FF8A00]">$76.8</h3>
          </div>

          <Button className={"w-full bg-[#3FC66E] text-white"}>Checkout</Button>
        </aside>
      </div>

      <div
        className={`${styles.container} grid grid-cols-7 gap-5 bg--700 mt-20`}
      >
        <div className=" col-span-5">
          <div className="grid grid-cols-3 gap-8">
            {jsonFile.pasta.map((item, idx) => (
              <Card
                btnSize={"px-5"}
                star={item.star}
                src={homeImg}
                price={item.price}
                name={item.name}
                alt={item.name}
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
        </div>
        <aside className="col-span-2 shadow-2xl h-auto py-5 px-5 flex flex-col gap-10 items-center">
          <Button className={"w-full bg-[#512982] text-white"}>
            Order list
          </Button>
          <OrderListItem price={"$24.1"} initialCount={2} name={"Spaghetti"} />
          <OrderListItem price={"$35.7"} initialCount={2} name={"Pizza"} />
          <OrderListItem
            price={"$18.5"}
            initialCount={2}
            name={"Caesar salad"}
          />
          <div className="flex justify-between w-full items-center">
            <h3 className="text-[32px] font-semibold">Total</h3>
            <h3 className="text-2xl text-[#FF8A00]">$76.8</h3>
          </div>
          aside
          <Button className={"w-full bg-[#3FC66E] text-white"}>Checkout</Button>
        </aside>
      </div>
    </section>
  );
};

export default OrderOnline;