import { Link } from "react-router-dom";

const FrontEndSubMenu = (props) => {
  return (
    <ul
      className="z-40 bg-white py-2 space-y-6 w-[14.5rem] px-4 absolute transition-all duration-300 rounded text-[#464749] text-sm border-b-[3px] border-b-green-500"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <li className={props.liClass}>
        <Link to="/html-advance">آموزش HTML</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/css-education">آموزش CSS</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/flex-box">آموزش FlexBox</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/css-grid">آموزش CSS Grid</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/emmet">آموزش Emmet</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/advance-template-design-with-html-css-flexbox">اموزش اصولی طراحی قالب</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/java-script-zero-to-hero">آموزش جاوا اسکریپت</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/bootstrap5">آموزش بوت‌ استرپ</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/reactjs">آموزش جامع ReactJS</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/free-vuejs-training">آموزش ویو جی اس</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/vscode-tutorial">آموزش وی‌اس کد – Vscode</Link>
      </li>
      <li className={props.liClass + " pb-4"}>
        <Link to="/npm-tutorial">آموزش NPM</Link>
      </li>
    </ul>
  );
};

export default FrontEndSubMenu;
