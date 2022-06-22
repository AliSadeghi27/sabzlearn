import { Link } from "react-router-dom";

const FooterCenter = () => {
  const footerCenterItem = [
    { id: 1, title: "نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون" },
    {
      id: 2,
      title: "چگونه پایتون را آپدیت کنیم؟ | آموزش صفر تا صد آپدیت کردن پایتون",
    },
    {
      id: 3,
      title:
        "آموزش نصب پایتون صفر تا صد | نحوه نصب پایتون در مک، ویندوز و لینوکس",
    },
    {
      id: 4,
      title:
        "بهترین فریم ورک های فرانت اند | بررسی کاربرد، مزایا و معایب هرکدام",
    },
    { id: 5, title: "معرفی بهترین سایت آموزش جاوا اسکریپت" },
  ];

  return (
    <ul className="flex flex-col text-[#464749] space-y-3">
      {footerCenterItem.map((item) => (
      <li
        key={item.id}
        className="hover:text-blue-500 transition-all duration-300"
      >
        <Link to="/">{item.title}</Link>
      </li>
      ))}
    </ul>
  );
};

export default FooterCenter;
