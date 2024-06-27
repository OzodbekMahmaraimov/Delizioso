import tableimg from "../../assets/table.jpg";

const Roundimg = () => {
  return (
    <div className=" relative">
      <img className="drop-filter drop-shadow-2xl rounded-full object-cover mx-auto w-[30rem] h-[30rem]" src={tableimg} alt="table img" />
    </div>
  );
};

export default Roundimg;
