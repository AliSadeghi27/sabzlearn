import CoursesDescription from "./CoursesDescription";
import CoursesImg from "./CoursesImg";
import CoursesTitle from "./CoursesTitle";
import PlayIcon from "./PlayIcon";

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
              <CoursesImg course={course} />
              <PlayIcon course={course} />
              <CoursesTitle course={course} />
              <CoursesDescription course={course} />
            </div>
          ))}
    </div>
  );
};

export default CoursesItem;
