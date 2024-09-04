import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";
import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppContext = createContext();

export default function App() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enroll = (course) => {
    //check if already enrolled in course
    const isAlreadyEnrolled = enrolledCourses.some(
      (enrolledCourse) => enrolledCourse.courseNumber === course.courseNumber
    );

    if (!isAlreadyEnrolled) {
      setEnrolledCourses((previousCourses) => [...previousCourses, course]);
      toast.success(`Successfully enrolled in ${course.courseName}`);
    } else {
      toast.error(`You are already enrolled in ${course.courseName}`);
    }
  };

  const drop = (courseNumber) => {
    setEnrolledCourses((previousCourses) =>
      previousCourses.filter((course) => course.courseNumber !== courseNumber)
    );
    toast.info(`Dropped course ${courseNumber}`);
  };

  return (
    <AppContext.Provider value={{ enrolledCourses, enroll, drop }}>
      <div>
        <Header />
        <SchoolCatalog />
        <ClassSchedule />
        <ToastContainer />
      </div>
    </AppContext.Provider>
  );
}
