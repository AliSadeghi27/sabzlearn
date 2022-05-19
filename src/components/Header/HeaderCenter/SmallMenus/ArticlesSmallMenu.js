import { Link } from "react-router-dom";

const ArticlesSmallMenu = () => {
  return (
    <div className="border-r border-r-green-500">
      <ul className="flex flex-col text-[#6c757d] space-y-2 text-[15px] mt-3 mr-3">
        <li>
          <Link to="/">اچ تی ام ال</Link>
        </li>
        <li>
          <Link to="/">بوت استرپ</Link>
        </li>
        <li>
          <Link to="/">پروژه های برنامه نویسی</Link>
        </li>
        <li>
          <Link to="/">تست نفوذ و امنیت وب</Link>
        </li>
        <li>
          <Link to="/">جی کوئری</Link>
        </li>
        <li>
          <Link to="/">ریکت جی اس</Link>
        </li>
        <li>
          <Link to="/">سی اس اس</Link>
        </li>
        <li>
          <Link to="/">شروع برنامه نویسی</Link>
        </li>
        <li>
          <Link to="/">طراحی سایت</Link>
        </li>
        <li>
          <Link to="/">ویو جی اس</Link>
        </li>
      </ul>
    </div>
  );
};

export default ArticlesSmallMenu;
