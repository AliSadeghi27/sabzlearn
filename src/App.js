import { useCallback, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import CoursePage from "./components/CoursePage/CoursePage";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Shop from "./Pages/Shop/Shop";

const App = () => {
  const [allCourses, setAllCourses] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCourses = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://sabzlearn-123dd-default-rtdb.firebaseio.com/all-courses.json"
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
          content: data[key].content,
        });
      }

      setAllCourses(loadedCourses);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <div className="font-vazirMatn">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shop">
          <Shop allCourses={allCourses} />
        </Route>
        <Route path="/:url" exact>
          <CoursePage allCourses={allCourses} />
        </Route>
        {isLoading && !isError && <Loading />}
        {!isLoading && isError && <Error />}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
