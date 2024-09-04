import { useContext } from "react";
import logo from "./assets/logo.png";
import { AppContext } from "./App";

export default function Header() {
  const { enrolledCourses } = useContext(AppContext);
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="enrollment">
        Classes Enrolled: {enrolledCourses.length}
      </div>
    </div>
  );
}
