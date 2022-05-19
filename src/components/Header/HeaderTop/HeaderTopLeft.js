import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const HeaderTopLeft = () => {
  return (
    <div className="flex justify-between my-auto py-2 w-[21rem] md:ml-2">
      <div className="">
        <Link to="/" className="flex items-center group">
          <span className="text-[#464749] text-[15px] group-hover:text-blue-600 transition-all duration-300">
            ۰۹۳۳۴۰۰۸۳۸۵
          </span>
          <Icon
            icon="ant-design:phone-twotone"
            width="16"
            className="border border-[#2bce56] rounded-sm mr-2"
            color="#2bce56"
          />
        </Link>
      </div>
      <div>
        <Link to="/" className="flex items-center group">
          <span className="text-[#464749] text-[15px] group-hover:text-blue-600 transition-all duration-300">
            sabzlearn@gmail.com
          </span>
          <Icon
            icon="fa:envelope-o"
            color="#2bce56"
            width="16"
            className="mr-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeaderTopLeft;
