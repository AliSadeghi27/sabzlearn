import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArticlesSmallMenu from "./SmallMenus/ArticlesSmallMenu";
import FrontEndSmallMenu from "./SmallMenus/FrontEndSmallMenu";
import SecuritySmallMenu from "./SmallMenus/SecuritySmallMenu";

const SmallMenu = () => {
  const [frontEndMenu, setFrontEndMenu] = useState(false);
  const [securityMenu, setSecurityMenu] = useState(false);
  const [articlesMenu, setArticlesMenu] = useState(false);

  return (
    <div className="w-[18rem] min-h-screen bg-[#212529] z-40 flex flex-col">
      <div className="mt-6 mx-4">
        <input
          type="text"
          placeholder="ورود واژه کلیدی ..."
          className="w-full rounded bg-[#0000004d] text-[#6c757d] p-2 outline-none placeholder:text-[#6c757d]"
        />
      </div>
      <ul className="flex flex-col mr-4 ml-7 mt-6 text-white space-y-4 ">
        <li>
          <Link to="/">صفحه اصلی</Link>
        </li>
        <li onClick={() => setFrontEndMenu(!frontEndMenu)}>
          <Link to="/" className="flex justify-between items-center">
            <span>فرانت اند</span>
            <Icon
              icon={frontEndMenu ? "fa:angle-down" : "fa:angle-left"}
              width="6"
              color="#6c757d"
            />
          </Link>
          {frontEndMenu && <FrontEndSmallMenu />}
        </li>
        <li onClick={() => setSecurityMenu(!securityMenu)}>
          <Link to="/" className="flex justify-between items-center">
            <span>امنیت</span>
            <Icon
              icon={securityMenu ? "fa:angle-down" : "fa:angle-left"}
              width="6"
              color="#6c757d"
            />
          </Link>
          {securityMenu && <SecuritySmallMenu />}
        </li>
        <li onClick={() => setArticlesMenu(!articlesMenu)}>
          <Link to="/" className="flex justify-between items-center">
            <span>مقالات</span>
            <Icon
              icon={articlesMenu ? "fa:angle-down" : "fa:angle-left"}
              width="6"
              color="#6c757d"
            />
          </Link>
          {articlesMenu && <ArticlesSmallMenu />}
        </li>
        <li>
          <Link to="/python">آموزش پایتون</Link>
        </li>
      </ul>
      <div className="h-[1px] mt-9 w-full bg-[#414346]"></div>
    </div>
  );
};

export default SmallMenu;
