import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, SetCourses] = useState([]);
  useEffect(() => {
    fetch("https://language-learning-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => SetCourses(data));
  }, []);

  return (
    <div className="text-center border border-red-700 p-2">
      <h1 className="text-3xl font-bold text-yellow-700">All Courses </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {courses?.map((course) => (
          <Course key={course._id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
