import { useEffect, useState } from "react";
import Search from "./Search";

export default function SchoolCatalog() {
  const [info, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("../api/courses.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const filteredCourses = info.filter((course) =>
    course.courseName.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <table>
        <thead>
          <tr>
            <th>Trimester</th>
            <th>Course Number</th>
            <th>Courses Name</th>
            <th>Semester Credits</th>
            <th>Total Clock Hours</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((col) => (
            <tr key={col.courseNumber}>
              <td>{col.trimester}</td>
              <td>{col.courseNumber}</td>
              <td>{col.courseName}</td>
              <td>{col.semesterCredits}</td>
              <td>{col.totalClockHours}</td>
              <td>
                <button>Enroll</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}
