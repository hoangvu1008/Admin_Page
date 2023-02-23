import React from "react";
import { Route, Routes } from "react-router-dom";
import Semester from "../../pages/Semester";
import Teacher from "../../pages/Teacher";
import Course from "../../pages/Course";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/course" element={<Course />} />
      <Route path="/semester" element={<Semester />} />
      <Route path="/teacher" element={<Teacher />} />
    </Routes>
  );
};

export default AppRoutes;
