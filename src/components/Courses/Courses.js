import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import CoursesItem from "./CoursesItem";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import CoursesHeader from "./CoursesHeader";

const Courses = () => {
  const [allCourses, setAllCourses] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCourses = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://sabzlearn-58732-default-rtdb.firebaseio.com/courses.json"
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
    } catch (err) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <div className="mt-10">
      <div className="flex justify-between md:flex-row flex-col mx-[2rem] xl:mx-[6rem]">
        <div className="flex flex-col">
          <CoursesHeader />
        </div>
        <Link
          to="/shop"
          className="flex items-center mt-5 md:w-auto md:mt-0 w-1/2 mr-32 bg-green-500 text-white h-10 rounded px-3 text-sm"
        >
          <span>تمام دوره ها</span>
          <Icon icon="bi:arrow-left-short" width="24" />
        </Link>
      </div>
      {!isLoading && !isError && <CoursesItem courses={allCourses} />}
      {isLoading && !isError && <Loading />}
      {!isLoading && isError && <Error />}
    </div>
  );
};

export default Courses;
