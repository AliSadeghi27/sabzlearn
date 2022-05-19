import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArticlesSubMenu from "./SubMenus/ArticlesSubMenu";
import FrontEndSubMenu from "./SubMenus/FrontEndSubMenu";
import SecuritySubMenu from "./SubMenus/SecuritySubMenu";

const HeaderCenterRight = () => {
  const [frontEndMenu, setFrontEndMenu] = useState(false);
  const [securityMenu, setSecurityMenu] = useState(false);
  const [articlesMenu, setArticlesMenu] = useState(false);
  const liClass =
    "mr-4 text-[#7f8187] text-[17px] relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-green-500 after:top-7 after:right-0 after:rounded hover:after:w-[13px] after:transition-all after:duration-300 before:content-[''] before:absolute before:right-0 before:top-[33px] before:w-0 before:h-[3px] before:bg-gray-400 before:rounded hover:before:w-[24px] before:transition-all";
  const liSubMenuClass =
    "relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-green-500 after:top-7 after:-right-3 after:rounded hover:after:w-[13px] after:transition-all after:duration-300 before:content-[''] before:absolute before:-right-3 before:top-[33px] before:w-0 before:h-[3px] before:bg-gray-400 before:rounded hover:before:w-[24px] before:transition-all hover:text-blue-600 transition-all duration-300";

  return (
    <div className="items-center flex">
      <div className="mr-3">
        <Link to="/">
          <img
            src="https://sabzlearn.ir/wp-content/uploads/2021/04/logo-one-copy.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="hidden lg:block">
        <ul className="flex justify-between">
          <li className={liClass}>
            <Link to="/">
              <span>صفحه اصلی</span>
            </Link>
          </li>
          <li
            className={liClass}
            onMouseOver={() => setFrontEndMenu(true)}
            onMouseLeave={() => setFrontEndMenu(false)}
          >
            <Link to="/" className="flex items-center">
              <span>فرانت اند</span>
              <Icon icon="fa:angle-down" width="10" className="mr-2" />
            </Link>
            {frontEndMenu && <FrontEndSubMenu liClass={liSubMenuClass} />}
          </li>
          <li
            className={liClass}
            onMouseOver={() => setSecurityMenu(true)}
            onMouseLeave={() => setSecurityMenu(false)}
          >
            <Link to="/" className="flex items-center">
              <span>امنیت</span>
              <Icon icon="fa:angle-down" width="10" className="mr-2" />
            </Link>
            {securityMenu && <SecuritySubMenu liClass={liSubMenuClass} />}
          </li>
          <li
            className={liClass}
            onMouseOver={() => setArticlesMenu(true)}
            onMouseLeave={() => setArticlesMenu(false)}
          >
            <Link to="/" className="flex items-center">
              <span>مقالات</span>
              <Icon icon="fa:angle-down" width="10" className="mr-2" />
            </Link>
            {articlesMenu && <ArticlesSubMenu liClass={liSubMenuClass} />}
          </li>
          <li className={liClass}>
            <Link to="/python">
              <span>آموزش پایتون</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderCenterRight;
