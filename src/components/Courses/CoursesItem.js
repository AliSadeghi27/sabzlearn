import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const CoursesItem = (props) => {
  return (
    <div className="flex flex-wrap justify-between lg:justify-around xl:justify-between xl:mx-[6rem] mx-[2rem] md:mx-[1rem]">
      {!props.courses
        ? null
        : props.courses.map((course) => (
            <div
              className="flex bg-gray-100 relative group flex-col hover:mt-5 transition-all duration-300 rounded-md mt-7"
              key={course.id}
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <Link to={`/${course.url}`}>
                <img
                  className="rounded-t-md w-full"
                  src={course.img}
                  alt={course.title}
                />
              </Link>
              <div className="bg-gray-400 text-white hover:text-black bg-opacity-50 right-4 pb-3 pt-1 hover:bg-white hover:bg-opacity-100 transition-all duration-300 px-2 absolute top-32 opacity-0 rounded-md group-hover:top-16 group-hover:opacity-100 md:top-48 md:group-hover:top-32">
                <Link to={`/${course.url}`}>
                  <Icon icon="fluent:play-28-regular" width="26" />
                </Link>
              </div>
              <div className="bg-white">
                <h2 className="text-gray-700 hover:text-blue-500 transition-all duration-300 text-lg m-3 max-w-[20rem] h-12">
                  <Link to={`/${course.url}`}>{course.title}</Link>
                </h2>
                <div className="flex justify-between m-3">
                  <div className="flex items-center text-[#6c757d]">
                    <Icon icon="la:chalkboard-teacher" width="24" />
                    <Link
                      to="/"
                      className="text-[13px] hover:text-blue-500 transition-all mr-1"
                    >
                      {course.teacher}
                    </Link>
                  </div>
                  <div className="bg-[url(https://sabzlearn.ir/wp-content/themes/emperor/assets/images/star-empty.svg)] bg-left-top bg-repeat-x w-[89px] relative">
                    <div
                      className={`bg-[url(https://sabzlearn.ir/wp-content/themes/emperor/assets/images/star-fill.svg)] bg-left-top bg-repeat-x h-full absolute left-0`}
                      style={{ width: `${course.rating}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="text-[#6c757d] flex justify-between p-3">
                <div className="flex items-center">
                  <Icon icon="ph:users-three" width="22" className="ml-1" />
                  <span className="mt-[2px]">{course.students}</span>
                </div>
                <span className="text-lg">{course.price}</span>
              </div>
            </div>
          ))}
    </div>
  );
};

export default CoursesItem;