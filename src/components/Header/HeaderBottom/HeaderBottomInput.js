import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const HeaderBottomInput = () => {
  return (
    <div className="w-10/12 xl:w-7/12 md:w-11/12 flex relative mt-5 z-10">
      <input
        type="text"
        placeholder="چی دوست داری یاد بگیری...؟!"
        className="w-full rounded-lg h-16 outline-none pr-6"
      />
      <Link
        to="/"
        className="bg-green-500 p-4 rounded-lg top-1 absolute left-1"
      >
        <Icon icon="carbon:search" width="25" color="#fff" />
      </Link>
    </div>
  );
};

export default HeaderBottomInput;
