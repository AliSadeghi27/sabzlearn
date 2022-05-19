import { Link } from "react-router-dom";

const ArticlesSubMenu = (props) => {
  return (
    <ul
      className="z-40 bg-white py-2 space-y-6 w-[14.5rem] px-4 absolute transition-all duration-300 rounded text-[#464749] text-sm border-b-[3px] border-b-green-500"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <li className={props.liClass}>
        <Link to="/">اچ تی ام ال</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/">بوت استرپ</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/">پروژه های برنامه نویسی</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/">تست نفوذ و امنیت وب</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/">جی کوئری</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/">ریکت جی اس</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/">سی اس اس</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/">شروع برنامه نویسی</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/">طراحی سایت</Link>
      </li>
      <li className={props.liClass + " pb-4"}>
        <Link to="/">ویو جی اس</Link>
      </li>
    </ul>
  );
};

export default ArticlesSubMenu;
