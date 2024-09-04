import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function App() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enroll = (course) => {
    setEnrolledCourses((alreadyEnrolled) => [...alreadyEnrolled, course]);
  };

  const drop = (courseNumber) => {
    setEnrolledCourses((alreadyEnrolled) =>
      alreadyEnrolled.filter((course) => course.courseNumber !== courseNumber)
    );
  };

  return (
    <AppContext.Provider value={{ enrolledCourses, enroll, drop }}>
      <div>
        <Header />
        <SchoolCatalog />
        <ClassSchedule />
      </div>
    </AppContext.Provider>
  );
}
