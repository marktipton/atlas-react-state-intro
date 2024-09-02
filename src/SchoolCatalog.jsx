import { useEffect, useState } from "react";

export default function SchoolCatalog() {
  const [info, setData] = useState([]);
  useEffect(() => {
    fetch("../api/courses.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <input type="text" placeholder="Search" />
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
          {info.map((col, index) => (
            <tr key={index}>
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
