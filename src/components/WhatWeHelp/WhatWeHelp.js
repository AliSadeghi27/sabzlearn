import { Icon } from "@iconify/react";

const WhatWeHelp = () => {
  const WhatWeHelpItemOne = [
    {
      id: 1,
      title: "دوره های اختصاصی",
      content: "با پشتیبانی و کیفیت بالا ارائه میده !",
      icon: <Icon icon="lucide:copyright" width="75" color="#666" />,
    },
    {
      id: 2,
      title: "اجازه تدریس",
      content: "به هر مدرسی رو نمیده. چون کیفیت براش مهمه !",
      icon: <Icon icon="bx:leaf" width="75" color="#666" />,
    },
  ];
  const WhatWeHelpItemTwo = [
    {
      id: 1,
      title: "دوره پولی و رایگان",
      content:
        "براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده",
      icon: <Icon icon="fa-regular:gem" width="75" color="#666" />,
    },
    {
      id: 2,
      title: "اهمیت به کاربر",
      content:
        "اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست",
      icon: <Icon icon="la:crown" width="75" color="#666" />,
    },
  ];

  return (
    <div className="mx-[2rem] xl:mx-[6rem] mt-12">
      <div className="flex flex-col">
        <h2 className="text-[20px] lg:text-[26px] text-gray-800 font-bold relative after:content-[''] after:absolute after:bottom-1 after:w-[25%] after:h-[45%] after:bg-green-700 after:opacity-50 after:right-0 before:content-[''] before:absolute before:h-12 before:w-1 before:bg-green-500 before:top-3 before:rounded before:-right-3 before:rotate-[15deg]">
          ما چه کمکی بهتون میکنیم؟
        </h2>
        <span className="mr-1.5 text-gray-500">
          از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست
        </span>
      </div>
      <div className="flex flex-col w-full mt-4">
        <div className="flex flex-col md:flex-row justify-between">
          {WhatWeHelpItemOne.map((item) => (
            <div
              className="flex w-full md:w-[48%] md:flex-row flex-col mb-4 p-3 items-center rounded-lg"
              key={item.id}
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <span className="ml-3 mb-2 md:mb-0">{item.icon}</span>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <span className="text-[#050505] mt-2">{item.content}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          {WhatWeHelpItemTwo.map((item) => (
            <div
              className="flex w-full md:w-[48%] md:flex-row flex-col mb-4 p-3 items-center rounded-lg"
              key={item.id}
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <span className="ml-3 mb-2 md:mb-0">{item.icon}</span>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <span className="text-[#050505] mt-2">{item.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeHelp;
