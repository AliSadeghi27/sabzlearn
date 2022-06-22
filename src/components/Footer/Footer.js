import FooterCenter from "./FooterCenter";
import FooterLeft from "./FooterLeft";

const Footer = () => {
  const h3Class =
    "text-[#464749] text-xl mb-6 relative before:content-[''] before:w-7 before:h-7 before:absolute before:bg-green-500 before:bg-opacity-40 before:top-0 before:right-1.5 before:rounded-md before:rotate-[40deg]";

  return (
    <>
      <footer className="flex flex-col lg:flex-row lg:space-y-0 space-y-10 mx-[2rem] xl:mx-[6rem] justify-between mt-36 bg-gray-200 rounded-xl py-14 px-8 relative before:content-[''] before:bg-green-500 before:w-[40%] before:rounded-b-[20px] before:h-[14px] before:absolute before:-bottom-[14px] before:right-[30%] before:left-[30%] mb-10">
        <div className="flex flex-col w-full lg:w-1/3">
          <h3 className={h3Class}>درباره ما</h3>
          <span className="text-[#7d7e7f]">
            وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که در
            فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل قبول بود
            که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و فنی قابل
            قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم! و خب امروز
            آکادمی آموزش برنامه نویسی سبزلرن به عنوان یک آکادمی خصوصی فعالیت
            میکنه و این به این معنی هست که هر مدرسی اجازه تدریس در اون رو نداره
            و باید از فیلترینگ های خاص آکادمی سبزلرن رد شه! این به این معنی هست
            که ما برامون فن بیان و نحوه تعامل مدرس با دانشجو بسیار مهمه! ما در
            آکادمی سبزلرن تضمین پشتیبانی خوب و با کیفیت رو به شما میدیم . چرا که
            مدرسین وب سایت سبزلرن حتی برای پشتیبانی دوره های رایگان شون هم هزینه
            دریافت میکنند و متعهد هستند که هوای کاربر های عزیز رو داشته باشند !
          </span>
        </div>
        <div className="flex flex-col w-full lg:w-1/3 lg:mx-3">
          <h3 className={h3Class}>آخرین مطالب</h3>
          <FooterCenter />
        </div>
        <FooterLeft h3Class={h3Class} />
      </footer>
      <p className="text-center text-[#777777] mb-10">
        کلیه حقوق برای آکادمی آموزش برنامه نویسی سبز لرن محفوظ است.
      </p>
    </>
  );
};

export default Footer;
