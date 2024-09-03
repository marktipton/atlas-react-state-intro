import { useEffect, useState } from "react";
import Search from "./Search";

export default function SchoolCatalog() {
  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);

  useEffect(() => {
    fetch("../api/courses.json")
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
        setFilteredInfo(data);
      });
  }, []);

  const handleSearchCategory = (searchInput) => {
    const filteredData = info.filter(
      (course) =>
        course.courseName.toLowerCase().includes(searchInput.toLowerCase()) ||
        course.courseNumber.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredInfo(filteredData);
  };

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <Search onSearch={handleSearchCategory} />
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
          {filteredInfo.map((col) => (
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
