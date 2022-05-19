import { Link } from "react-router-dom";

const FooterLeft = (props) => {
  const linkClass =
    "relative before:content-[''] before:h-[3px] before:absolute before:top-2 before:-right-5 before:bg-green-500 before:w-0 hover:before:w-3 before:transition-all before:duration-300 transition-all duration-300 hover:text-blue-500 ";

  return (
    <div className="flex flex-col w-full lg:w-1/3">
      <h3 className={props.h3Class}>دسترسی سریع</h3>
      <div className="flex flex-col sm:flex-row text-[#464749]">
        <div className="flex flex-col space-y-3 ml-12 mr-3">
          <Link to="/" className={linkClass + " sm:-mr-3 sm:hover:mr-0"}>
            آموزش HTML
          </Link>
          <Link to="/" className={linkClass + " sm:-mr-3 sm:hover:mr-0"}>
            آموزش جاوا اسکریپت
          </Link>
          <Link to="/" className={linkClass + " sm:-mr-3 sm:hover:mr-0"}>
            آموزش ری اکت
          </Link>
        </div>
        <div className="flex flex-col space-y-3 mt-3 sm:mt-0">
          <Link to="/" className={linkClass + " sm:mr-3 sm:hover:mr-6"}>
            آموزش CSS
          </Link>
          <Link to="/" className={linkClass + " sm:mr-3 sm:hover:mr-6"}>
            آموزش بوت استرپ
          </Link>
          <Link to="/" className={linkClass + " sm:mr-3 sm:hover:mr-6"}>
            آموزش پایتون
          </Link>
        </div>
      </div>
      <div className="flex flex-col text-[#464749] mt-3 space-y-3">
        <Link
          to="/"
          className="hover:text-blue-500 transition-all duration-300"
        >
          قوانین و مقررات
        </Link>
        <Link
          to="/"
          className="hover:text-blue-500 transition-all duration-300"
        >
          درباره ما
        </Link>
      </div>
    </div>
  );
};

export default FooterLeft;
