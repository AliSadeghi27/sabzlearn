import { Link } from "react-router-dom";

const FrontEndSmallMenu = () => {
  return (
    <div className="border-r border-r-green-500">
      <ul className="flex flex-col text-[#6c757d] space-y-2 text-[15px] mt-3 mr-3">
        <li>
          <Link to="/html-advance">آموزش HTML</Link>
        </li>
        <li>
          <Link to="/css-education">آموزش CSS</Link>
        </li>
        <li>
          <Link to="/flex-box">آموزش FlexBox</Link>
        </li>
        <li>
          <Link to="/css-grid">آموزش CSS Grid</Link>
        </li>
        <li>
          <Link to="/emmet">آموزش Emmet</Link>
        </li>
        <li>
          <Link to="/advance-template-design-with-html-css-flexbox">اموزش اصولی طراحی قالب</Link>
        </li>
        <li>
          <Link to="/java-script-zero-to-hero">آموزش جاوا اسکریپت</Link>
        </li>
        <li>
          <Link to="/bootstrap5">آموزش بوت‌ استرپ</Link>
        </li>
        <li>
          <Link to="/reactjs">آموزش جامع ReactJS</Link>
        </li>
        <li>
          <Link to="/free-vuejs-training">آموزش ویو جی اس</Link>
        </li>
        <li>
          <Link to="/vscode-tutorial">آموزش وی‌اس کد – Vscode</Link>
        </li>
        <li>
          <Link to="/npm-tutorial">آموزش NPM</Link>
        </li>
      </ul>
    </div>
  );
};

export default FrontEndSmallMenu;
