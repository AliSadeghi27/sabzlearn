import HeaderCenterLeft from "./HeaderCenterLeft";
import HeaderCenterRight from "./HeaderCenterRight";

const HeaderCenter = () => {
  return (
    <div className="flex justify-between mx-3 my-5">
      <HeaderCenterRight />
      <HeaderCenterLeft />
    </div>
  );
};

export default HeaderCenter;
