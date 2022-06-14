import { useCallback, useEffect, useState } from "react";
import CoursesItem from "../Courses/CoursesItem";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

const PopularCourses = () => {
  const [allPopularCourses, setAllPopularCourses] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPopularCourses = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://react-sabzlearn-default-rtdb.firebaseio.com/popular-courses.json"
      );
      const data = await response.json();
      const loadedPopularCourses = [];

      for (const key in data) {
        loadedPopularCourses.push({
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

      setAllPopularCourses(loadedPopularCourses);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPopularCourses();
  }, [fetchPopularCourses]);

  return (
    <div className="mt-12">
      <div className="flex flex-col mb-4 mx-[2rem] xl:mx-[6rem]">
        <h2 className="text-[20px] lg:text-[26px] text-gray-800 font-bold relative after:content-[''] after:absolute after:bottom-1 after:w-[14rem] after:h-[45%] after:bg-green-700 after:opacity-50 after:right-0 before:content-[''] before:absolute before:h-12 before:w-1 before:bg-green-500 before:top-3 before:rounded before:-right-3 before:rotate-[15deg]">
          محبوب ترین دوره ها
        </h2>
      </div>
      {!isLoading && !isError && <CoursesItem courses={allPopularCourses} />}
      {isLoading && !isError && <Loading />}
      {!isLoading && isError && <Error />}
    </div>
  );
};

export default PopularCourses;
