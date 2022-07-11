import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useScrollTo } from "react-use-window-scroll";

const CoursePage = (props) => {
  const [course, setCourse] = useState([]);
  const params = useParams();
  const scrollTo = useScrollTo();

  useEffect(() => {
    scrollTo(0, 0);
    setCourse(props.allCourses.find((course) => course.url === params.url));
  }, [props.allCourses, params.url, scrollTo]);

  return (
    <>
      {!course ? null : (
        <div className="mx-[2rem] mt-20 xl:mx[-6rem]">
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <div className="w-full lg:w-1/2 flex flex-col">
              <h1 className="text-[#464749] text-2xl font-bold mb-7">
                {course.title}
              </h1>
              <span className="text-[#7b868a] text-lg w-[90%]">
                {course.content}
              </span>
            </div>
            <div className="w-full lg:w-1/2 mb-10">
              <img src={course.img} className="w-full" alt={course.title} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoursePage;
