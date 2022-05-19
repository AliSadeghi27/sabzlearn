import HeaderBottom from "../../components/Header/HeaderBottom/HeaderBottom";
import Courses from "../../components/Courses/Courses";
import WhatWeHelp from "../../components/WhatWeHelp/WhatWeHelp";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import PresellCourses from "../../components/PresellCourses/PresellCourses";
import SpecializedArticles from "../../components/SpecializedArticles/SpecializedArticles";

const Home = () => {
  return (
    <>
      <HeaderBottom />
      <main>
        <Courses />
        <WhatWeHelp />
        <PopularCourses />
        <PresellCourses />
        <SpecializedArticles />
      </main>
    </>
  );
};

export default Home;
