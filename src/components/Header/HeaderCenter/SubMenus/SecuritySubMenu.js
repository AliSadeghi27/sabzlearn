import { Link } from "react-router-dom";

const SecuritySubMenu = (props) => {
  return (
    <ul
      className="z-40 bg-white py-2 space-y-6 w-[14.5rem] px-4 absolute transition-all duration-300 rounded text-[#464749] text-sm border-b-[3px] border-b-green-500"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <li className={props.liClass}>
        <Link to="/ceh-v11">نقشه راه ورود به دنیای امنیت</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/black-network">شبکه با گرایش امنیت</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/pwk">لینوکس با گرایش امنیت</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/ceh-v11">آموزش هکرقانونمند – CEH V11</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/pwk">اموزش کالی لینوکس</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/black-py">اموزش پایتون سیاه</Link>
      </li>
      <li className={props.liClass}>
        <Link to="/burp-tutorial-in-real-world">اموزش Burp Suite</Link>
      </li>
      <li className={props.liClass + " pb-4"}>
        <Link to="/black-js">آموزش جاوااسکریپت سیاه</Link>
      </li>
    </ul>
  );
};

export default SecuritySubMenu;
