import React from "react";
import Card from "../components/Card";
import { useState } from "react";
import "./home.css";

const Home = () => {
  const [courseData, setCoursesData] = useState([]);

  const onClickHandler = () => {
    let subject = document.getElementById("subjectName").value;
    let Hours = document.getElementById("studyHours").value;
    // console.log(subject, Hours);

    if (subject == "" || Hours == "") {
      alert("Please fill all the fields");
      return;
    }

    const newCourseData = {
      subjectName: subject,
      hours: parseInt(Hours),
    };

    setCoursesData([...courseData, newCourseData]);

    document.getElementById("subjectName").value = "";
    document.getElementById("studyHours").value = "";
  };

  return (
    <div id="main-container">
      {/* <Card /> */}
      <h1>Geekster Education Planner</h1>
      <div id="container">
        <input type="text" id="subjectName" placeholder="Enter Subject Name" />
        <input
          type="number"
          name=""
          id="studyHours"
          placeholder="Enter the Hours"
        />

        <button onClick={onClickHandler}>Add</button>
      </div>
      {courseData.map((course, index) => {
        return (
          <div id="result" key={index}>
            <Card subjectName={course.subjectName} hours={course.hours} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
