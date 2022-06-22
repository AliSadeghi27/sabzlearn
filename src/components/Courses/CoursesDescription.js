import { Icon } from "@iconify/react";

const CoursesDescription = ({ course }) => {
  return (
    <div className="text-[#6c757d] flex justify-between p-3">
      <div className="flex items-center">
        <Icon icon="ph:users-three" width="22" className="ml-1" />
        <span className="mt-[2px]">{course.students}</span>
      </div>
      <span className="text-lg">{course.price}</span>
    </div>
  );
};

export default CoursesDescription;
