
import React, { useState } from 'react';
import styled from 'styled-components';
import CourseHomeWrapper from './CourseHome.style.js';
import SubjectCart from "../Subjects/SubjectCart.js"; // Import SubjectCart component
import { course } from '../constants/courseDetails.js';

const CourseHome = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handleChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const subjects = selectedSemester ? course[0].Btech[`semester${selectedSemester}`] : [];

  return (
    <CourseHomeWrapper>
      <div className="course-home-container">
        <h1 className="course-home-title">Course Home</h1>
        <p className="course-home-text">Welcome to our course! Please select a semester:</p>
        <div className="semester-selector">
          <label htmlFor="semester" className="semester-label">Select Semester:</label>
          <select
            id="semester"
            className="semester-select"
            value={selectedSemester}
            onChange={handleChange}
          >
            <option value="">Select Semester</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
              <option key={semester} value={semester}>
                Semester {semester}
              </option>
            ))}
          </select>
        </div>
        {selectedSemester && (
          <div>
            <h2 className="semester-subjects-title">Semester {selectedSemester} Subjects</h2>
            <SubjectCart subjects={subjects} /> 
          </div>
        )}
      </div>
    </CourseHomeWrapper>
  );
};

export default CourseHome;
