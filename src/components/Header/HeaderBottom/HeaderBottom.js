import BookIcon from "./BookIcon";
import ClockIcon from "./ClockIcon";
import HeaderBottomInput from "./HeaderBottomInput";
import HeaderBottomTitle from "./HeaderBottomTitle";
import StudentIcon from "./StudentIcon";

const HeaderBottom = () => {
  return (
    <div className="bg-[url(https://sabzlearn.ir/wp-content/uploads/2021/05/christian-wiediger-WkfDrhxDMC8-unsplash.jpg)] w-full bg-fixed flex flex-col items-center relative py-20 md:py-25">
      <div className="absolute top-0 right-0 w-full h-full bg-black opacity-50"></div>
      <HeaderBottomTitle />
      <HeaderBottomInput />
      <div className="justify-between mt-7 w-7/12 z-10 hidden xl:flex">
        <div className="flex flex-col items-center">
          <StudentIcon />
          <h3 className="text-white text-4xl mt-2">۲۱,۳۱۰</h3>
          <span className="text-white text-lg">
            کاربر توی سبزلرن ثبت نام کردن
          </span>
        </div>
        <div className="flex flex-col items-center">
          <BookIcon />
          <h3 className="text-white text-4xl mt-2">۳۴</h3>
          <span className="text-white text-xl">دوره آموزشی داریم</span>
        </div>
        <div className="flex flex-col items-center">
          <ClockIcon />
          <h3 className="text-white text-4xl mt-2">۲۶,۵۲۰</h3>
          <span className="text-white text-xl">دقیقه آموزش تولید کردیم</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
