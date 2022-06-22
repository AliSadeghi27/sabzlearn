import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const CoursesTitle = ({ course }) => {
  return (
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
  );
};

export default CoursesTitle;
