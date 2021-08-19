import React from "react";

export default function Course({ data }) {
  return (
    <div>
      <li>
        {data.courseName}, {data.courseId}, {data.teacherId}
      </li>
    </div>
  );
}
