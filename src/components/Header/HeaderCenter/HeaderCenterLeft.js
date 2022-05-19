import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SmallMenu from "./SmallMenu";

const HeaderCenterLeft = () => {
  const [smallMenu, setSmallMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center ml-2">
        <Link to="/" className="bg-green-500 p-1.5 lg:p-2.5 rounded">
          <Icon
            icon="carbon:search"
            width="18"
            color="#fff"
            className="lg:hidden"
          />
          <Icon
            icon="carbon:search"
            width="25"
            color="#fff"
            className="hidden lg:block"
          />
        </Link>
        <Link
          to="/"
          className="flex bg-gray-200 p-1.5 lg:p-2.5 rounded relative mx-3"
        >
          <Icon icon="bx:shopping-bag" width="18" className="lg:hidden" />
          <Icon icon="bx:shopping-bag" width="25" className="hidden lg:block" />
          <span className="bg-blue-500 absolute text-white rounded-full w-3 text-sm h-3 flex items-center justify-center">
            ۰
          </span>
        </Link>
        <Link
          to="/"
          className="flex items-center text-green-500 border-2 border-green-500 py-[9px] px-3 rounded hover:text-white hover:bg-green-500 transition-all duration-300"
        >
          <Icon icon="fa-regular:user" width="18" className="lg:ml-2" />
          <span className="hidden lg:block">ورود / ثبت نام</span>
        </Link>
        <Link
          to="/"
          className="bg-gray-200 p-1.5 mr-2 rounded lg:hidden"
          onClick={() => setSmallMenu(true)}
        >
          <Icon icon={smallMenu ? "bi:x" : "ant-design:menu-outlined"} width="20" />
        </Link>
      </div>
      {smallMenu && (
        <div className="flex absolute top-0 right-0">
          <SmallMenu />
          <div
            className="bg-black opacity-50 z-30 fixed top-0 left-0 w-100% h-screen right-0"
            onClick={() => setSmallMenu(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default HeaderCenterLeft;
