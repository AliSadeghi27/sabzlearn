import HeaderTopLeft from "./HeaderTopLeft";
import HeaderTopRight from "./HeaderTopRight";

const HeaderTop = () => {
  return (
    <div className="flex justify-end lg:justify-between bg-[#f0f2f7] px-[5px]">
      <HeaderTopRight />
      <HeaderTopLeft />
    </div>
  );
};

export default HeaderTop;
