import styled from 'styled-components';

const CourseHomeWrapper = styled.div`
  .course-home-container {
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: black;
  }

  .course-home-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .course-home-text {
    margin-bottom: 1rem;
  }

  .semester-selector {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .semester-label {
    margin-right: 0.5rem;
  }

  .semester-select {
    border: 1px solid #cbd5e0;
    border-radius: 0.25rem;
    padding: 0.5rem;
    background-color: #fff;
    color: #1a202c;
  }

  .semester-subjects-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export default CourseHomeWrapper;
