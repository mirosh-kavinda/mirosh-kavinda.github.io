import React from "react";
import "../../css/grid.scss";
import { Link } from "react-router-dom";

const portfolioGrid = () => {
  return (
    <div className="main-content ">

     <div className="row text-center mt-5" >
     <h1 className=" col-md-11 col-sm-12">
        Recent Works 
      </h1>
      <Link to="/projects" className=" btn col-sm-2 col-md-1 text-white nav-link  mt-3    ">
      <h5>
      See more
        </h5> 
      </Link>
     </div>
     
      <div className="portfolio pt-5 ">
        <Link
          to="/projects/projview"
          state={{
            projId: "4",
            projName: "StudyShack",
            projCat: "dev",
          }}

          className="img-hover-zoom portfolio-item medium one"
        >
          <h2>StudyShack</h2>
          <br />
        </Link>
        <Link
          to="/projects/projview"
          state={{ projId: "11", projName: "SpiritualRead", projCat: "dev" }}
          className="img-hover-zoom portfolio-item large two"
        >
          <h2>SpiritualRead</h2>
        </Link>
        <Link
          to="/projects/projview"
          state={{
            projId: "3",
            projName: "Unity Fitness Application Design",
            projCat: "casestudy",
          }}
          className="img-hover-zoom portfolio-item medium three"
        >
          <h2>FitPro CaseStudy</h2>
        </Link>
        <Link
          to="/projects/projview"
    
          state={{
            projId: "1",
            projName: "Charity Application Design",
            projCat: "casestudy",
          }}
          className="img-hover-zoom portfolio-item tall four wide"
        >
          <h2>Charity App CaseStudy</h2>
        </Link>
        <Link
          to="/projects/projview"
          state={{
            projId: "2",
            projName: "Travel mate application Design",
            projCat: "casestudy",
          }}
         
          className="img-hover-zoom portfolio-item tall five"
        >
          <h2>TravelMate CaseStudy</h2>
        </Link>
        <Link
          to="/projects/projview"

          
          state={{ projId: "6", projName: "Crafira", projCat: "dev" }}
          className="img-hover-zoom portfolio-item wide six"
        >
          <h2>Crafira</h2>
        </Link> 
      </div>


    </div>
  );
};
export default portfolioGrid;
