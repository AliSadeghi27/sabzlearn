import { Link } from "react-router-dom";

const HeaderTopRight = () => {
  const liClass =
    "before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:content-[''] before:w-[9px] before:h-[5px] hover:text-blue-600 transition-all duration-300 before:rounded-xl  before:top-2 before:bg-green-500 before:absolute relative before:-right-4";

  return (
    <ul className="justify-between text-[#464749] py-1 text-[15px] w-[55%] hidden lg:flex">
      <li className={liClass + " mr-8 w-[7%]"}>
        <Link to="/html-advance">آموزش HTML</Link>
      </li>
      <li className={liClass + " w-[7%]"}>
        <Link to="/css-education">آموزش CSS</Link>
      </li>
      <li className={liClass + " w-[13%]"}>
        <Link to="/java-script-zero-to-hero">آموزش جاوا اسکریپت</Link>
      </li>
      <li className={liClass + " w-[13%]"}>
        <Link to="/bootstrap5">آموزش بوت استرپ</Link>
      </li>
      <li className={liClass + " w-[10%]"}>
        <Link to="/reactjs">آموزش ری اکت</Link>
      </li>
      <li className={liClass + " w-[8%]"}>
        <Link to="/python">آموزش پایتون</Link>
      </li>
    </ul>
  );
};

export default HeaderTopRight;
