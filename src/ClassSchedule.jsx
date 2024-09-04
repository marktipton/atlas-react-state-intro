import { useContext } from "react";
import { AppContext } from "./App";

export default function ClassSchedule() {
  const { enrolledCourses } = useContext(AppContext);

  return (
    <div className="class-schedule">
      <h1>Class Schedule</h1>
      {enrolledCourses.length === 0 ? (
        <p>Not enrolled in any courses</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Course Number</th>
              <th>Course Name</th>
              <th>Drop</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((col) => (
              <tr key={col.courseNumber}>
                <td>{col.courseNumber}</td>
                <td>{col.courseName}</td>
                <td>
                  <button>Drop</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
