import { useEffect, useState, useCallback } from "react";
import Course from "./Course";

const Courses = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    fetch("http://localhost:47938/api/courses") // http://localhost:47938/api/courses
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return "Loading...";
  if (error) return error.message;
  return (
    <div>
      {data.map((data, index) => (
        <Course key={index} data={data} />
      ))}
    </div>
  );
};

export default Courses;
