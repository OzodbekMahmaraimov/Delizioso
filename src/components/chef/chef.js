const Chef = ({ src, name, job, bgColor }) => {
  return (
    <div className="rounded-3xl font-poppins">
      <div className={`${bgColor} h-[32rem] w-full overflow-hidden rounded-[5rem]`}>
        <img className="h-full object-cover" src={src} alt={name} />
      </div>
      <h3 className="font-semibold text-2xl text-[#311F09] py-8">{name}</h3>
      <h4 className="font-normal text-xl text-[#A08D76]">{job}</h4>
    </div>
  );
};

export default Chef;
