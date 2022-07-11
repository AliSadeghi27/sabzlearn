import { Icon } from "@iconify/react";
import WhatWeHelpItem from "./WhatWeHelpItem";
import WhatWeHelpTitle from "./WhatWeHelpTitle";

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
      <WhatWeHelpTitle />
      <div className="flex flex-col w-full mt-4">
        <div className="flex flex-col md:flex-row justify-between">
          {WhatWeHelpItemOne.map((item) => (
            <WhatWeHelpItem key={item.id} item={item} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          {WhatWeHelpItemTwo.map((item) => (
            <WhatWeHelpItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeHelp;
