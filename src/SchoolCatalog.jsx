import { useContext, useEffect, useState } from "react";
import Search from "./Search";
import { AppContext } from "./App";

export default function SchoolCatalog() {
  const { enroll } = useContext(AppContext);
  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);
  const [sort, setSort] = useState({ key: null, direction: "ascending" });
  const [page, setPage] = useState(1);

  const PAGE_SIZE = 5;
  const currentPage = filteredInfo.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );
  // track page boundaries to disable next/prev when at boundary of data
  const hasMore = filteredInfo.length > page * PAGE_SIZE;
  const hasLess = page > 1;

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
    setPage(1); // reset page after filtering
  };
  // sort in opposite direction of current
  const handleSort = (column) => {
    let direction = "ascending";
    // check the key of the column being click and its current sort direction
    if (sort.key === column && sort.direction === "ascending") {
      direction = "descending";
    }
    setSort({ key: column, direction });

    // creates shallow copy to sort data through comparisons
    const sortedData = [...filteredInfo].sort((x, y) => {
      if (x[column] < y[column]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (x[column] > y[column]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setFilteredInfo(sortedData);
    setPage(1); // reset page after sorting
  };

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <Search onSearch={handleSearchCategory} />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("trimester")}>Trimester</th>
            <th onClick={() => handleSort("courseNumber")}>Course Number</th>
            <th onClick={() => handleSort("courseName")}>Courses Name</th>
            <th onClick={() => handleSort("semesterCredits")}>
              Semester Credits
            </th>
            <th onClick={() => handleSort("totalClockHours")}>
              Total Clock Hours
            </th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {currentPage.map((col) => (
            <tr key={col.courseNumber}>
              <td>{col.trimester}</td>
              <td>{col.courseNumber}</td>
              <td>{col.courseName}</td>
              <td>{col.semesterCredits}</td>
              <td>{col.totalClockHours}</td>
              <td>
                <button onClick={() => enroll(col)}>Enroll</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled={!hasLess} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button disabled={!hasMore} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
