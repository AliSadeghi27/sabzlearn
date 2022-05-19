import { Link } from "react-router-dom";

const SecuritySmallMenu = () => {
  return (
    <div className="border-r border-r-green-500">
      <ul className="flex flex-col text-[#6c757d] space-y-2 text-[15px] mt-3 mr-3">
        <li>
          <Link to="/ceh-v11">نقشه راه ورود به دنیای امنیت</Link>
        </li>
        <li>
          <Link to="/black-network">شبکه با گرایش امنیت</Link>
        </li>
        <li>
          <Link to="/pwk">لینوکس با گرایش امنیت</Link>
        </li>
        <li>
          <Link to="/ceh-v11">آموزش هکرقانونمند – CEH V11</Link>
        </li>
        <li>
          <Link to="/pwk">اموزش کالی لینوکس</Link>
        </li>
        <li>
          <Link to="/black-py">اموزش پایتون سیاه</Link>
        </li>
        <li>
          <Link to="/burp-tutorial-in-real-world">اموزش Burp Suite</Link>
        </li>
        <li>
          <Link to="/black-js">آموزش جاوااسکریپت سیاه</Link>
        </li>
      </ul>
    </div>
  );
};

export default SecuritySmallMenu;
