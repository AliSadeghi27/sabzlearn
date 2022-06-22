import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const PlayIcon = ({ course }) => {
  return (
    <div className="bg-gray-400 text-white hover:text-black bg-opacity-50 right-4 pb-3 pt-1 hover:bg-white hover:bg-opacity-100 transition-all duration-300 px-2 absolute top-32 opacity-0 rounded-md group-hover:top-16 group-hover:opacity-100 md:top-48 md:group-hover:top-32">
      <Link to={`/${course.url}`}>
        <Icon icon="fluent:play-28-regular" width="26" />
      </Link>
    </div>
  );
};

export default PlayIcon;
