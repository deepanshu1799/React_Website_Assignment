import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/background.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Deepanshu Fitness </h1>
        <p> My name is Deepanshu Gupta and I'm a final year student in NSIT. I am a Fitness Coach and a programmer too.
        Here you can find workout videos related to different parts of the body. Given below are the list of videos which are already uploaded and there are many more to come!
        </p>
        </div>
        <div className="list-group">
             <h1>List Of Videos</h1>
            <Link to="#"className="list-group-item list-group-item-action list-group-item-success"> Abs Workout </Link>
            <Link to="#"className="list-group-item list-group-item-action list-group-item-success"> Chest Workout  </Link>
            <Link to="#"className="list-group-item list-group-item-action list-group-item-success"> Back Workout </Link>
            <Link to="#"className="list-group-item list-group-item-action list-group-item-success"> Triceps Workout </Link>
            <Link to="#"className="list-group-item list-group-item-action list-group-item-success"> Biceps Workout</Link>
            <Link to="#"className="list-group-item list-group-item-action list-group-item-success"> Thighs Workout </Link>
            <Link to="#"className="list-group-item list-group-item-action list-group-item-success"> Calves Workout </Link>
            <Link to="#"className="list-group-item list-group-item-action list-group-item-success"> Shoulder Workout </Link>
        </div>
    </div>
  );
}

export default Home;
