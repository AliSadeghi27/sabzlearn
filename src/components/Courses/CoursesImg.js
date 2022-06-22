import { Link } from "react-router-dom";

const CoursesImg = ({ course }) => {
  return (
    <Link
      to={`/${course.url}`}
      style={{ minWidth: "360px", minHeight: "180px" }}
    >
      <img
        className="rounded-t-md w-full"
        src={course.img}
        alt={course.title}
      />
    </Link>
  );
};

export default CoursesImg;
