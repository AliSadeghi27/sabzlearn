import CoursesItem from "../../components/Courses/CoursesItem";

const Shop = (props) => {
  return (
    <>
      {!props.allCourses ? null : (
        <div className="mt-10">
          <CoursesItem courses={props.allCourses} />
        </div>
      )}
    </>
  );
};

export default Shop;
