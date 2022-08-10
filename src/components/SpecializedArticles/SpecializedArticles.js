import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import SpecializedArticlesItems from "./SpecializedArticlesItems";

const SpecializedArticles = () => {
  const [allBestArticles, setAllBestArticles] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBestArticles = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://react-sabzlearn-fefb6-default-rtdb.firebaseio.com/best-articles.json"
      );
      const data = await response.json();
      const loadedBestArticles = [];

      for (const key in data) {
        loadedBestArticles.push({
          id: key,
          title: data[key].title,
          img: data[key].img,
          content: data[key].content,
          url: data[key].url,
        });
      }

      setAllBestArticles(loadedBestArticles);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBestArticles();
  }, [fetchBestArticles]);

  return (
    <div className="mt-14 mx-[2rem] xl:mx-[6rem]">
      <div className="flex flex-col items-center">
        <h2 className="mb-2 text-[#444] text-2xl md:text-[26px]">
          برترین مقالات تخصصی
        </h2>
        <Link
          to="/"
          className="flex items-center md:w-auto md:mt-0 w-1/2 bg-green-500 text-white h-auto rounded px-3 text-sm"
        >
          <span>تمام مطالب</span>
          <Icon icon="bi:arrow-left-short" width="24" />
        </Link>
      </div>
      {!isLoading && !isError && (
        <SpecializedArticlesItems articles={allBestArticles} />
      )}
      {isLoading && !isError && <Loading />}
      {!isLoading && isError && <Error />}
    </div>
  );
};

export default SpecializedArticles;
