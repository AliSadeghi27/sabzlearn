import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import CoursesItem from "./CoursesItem";

const Courses = () => {
  const [allCourses, setAllCourses] = useState("");

  const fetchCourses = useCallback(async () => {
    try {
      const response = await fetch(
        "https://sabzlearn-123dd-default-rtdb.firebaseio.com/courses.json"
      );
      const data = await response.json();
      const loadedCourses = [];

      for (const key in data) {
        loadedCourses.push({
          id: key,
          title: data[key].title,
          price: data[key].price,
          img: data[key].img,
          teacher: data[key].teacher,
          rating: data[key].rating,
          students: data[key].students,
          url: data[key].url,
        });
      }

      setAllCourses(loadedCourses);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <div className="mt-10">
      <div className="flex justify-between md:flex-row flex-col mx-[2rem] xl:mx-[6rem]">
        <div className="flex flex-col">
          <h2 className="text-[20px] lg:text-[26px] text-gray-800 font-bold relative after:content-[''] after:absolute after:bottom-1 after:w-[82%] after:h-[45%] after:bg-green-700 after:opacity-50 after:right-0 before:content-[''] before:absolute before:h-12 before:w-1 before:bg-green-500 before:top-3 before:rounded before:-right-3 before:rotate-[15deg]">
            جدیدترین دوره ها
          </h2>
          <span className="mr-1.5 text-gray-500">
            سکوی پرتاپ شما به سمت موفقیت
          </span>
        </div>
        <Link
          to="/shop"
          className="flex items-center mt-5 md:w-auto md:mt-0 w-1/2 mr-32 bg-green-500 text-white h-10 rounded px-3 text-sm"
        >
          <span>تمام دوره ها</span>
          <Icon icon="bi:arrow-left-short" width="24" />
        </Link>
      </div>
      <CoursesItem courses={allCourses} />
    </div>
  );
};

export default Courses;
