const WhatWeHelpItem = ({item}) => {
  return (
    <div
      className="flex w-full md:w-[48%] md:flex-row flex-col mb-4 p-3 items-center rounded-lg"
      key={item.id}
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
    >
      <span className="ml-3 mb-2 md:mb-0">{item.icon}</span>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">{item.title}</h2>
        <span className="text-[#050505] mt-2">{item.content}</span>
      </div>
    </div>
  );
};

export default WhatWeHelpItem;
