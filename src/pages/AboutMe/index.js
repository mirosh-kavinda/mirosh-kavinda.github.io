import image from "../../images/prof2.jpg";
import { AiOutlineGithub } from "react-icons/ai";

import History from "../../components/Aboutme/History";

export default function AboutMe() {
  return (
    <>
      <h1 className="mt-5 d-flex justify-content-center">Who Am I ?</h1>

      <div className="  row  d-flex justify-content-center ">
        <div className=" col-md-10 col-sm-12  ">
          <div className="row">
            <br />
            <div className="  mt-5  col-sm-12 col-md-8">
              <h5 className="mt-4 mx-4">
                Mirosh kavinda is a Software Engineering undergraduate at the
                Cinec Campus . . He describes himself as outgoing, dedicated,
                and open-minded. He is the vice president of Tech Strike Club in
                Cinec Campus at the same time associate member of Rotaract Club
                of cinec Campus. And also he is a member of UI/UX community of
                Sri Lanka.
                <br />
                <br /> He is interested in Web and Mobile Applications
                Development, DevOps, Cloud Architecture . He gets across to
                people and adjust to changes with ease and he loves volunteering
                and helping other people through technology.
              </h5>
            </div>
            <div className=" mt-5 p-4  container col-sm-12 col-md-3">
              <img
                alt="this is logo"
                src={image}
                height={"260px"}
                className="ms-5"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className=" mx-2 vh-4">
        <br />
        <br />
        <History />
        <h3 align="center" className="mt-5 mb-4">
          Tech Stack
          <hr />
          <span>
            <img
              alt="#1"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              height={"40px"}
            />
            <img
              alt="#2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              height={"40px"}
            />
            <img
              alt="#3"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              height={"40px"}
            />
            <img
              alt="#4"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
              height={"40px"}
            />
            <img
              alt="#5"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              height={"40px"}
            />
            <img
              alt="#6"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              height={"40px"}
            />
            <img
              alt="#7"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              height={"40px"}
            />
            <img
              alt="#8"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              height={"40px"}
            />
            <img
              alt="#9"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              height={"40px"}
            />
            <img
              alt="#10"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              height={"40px"}
            />
            <img
              alt="#11"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
              height={"40px"}
            />
            <img
              alt="#12"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
              height={"40px"}
            />
            <img
              alt="#13"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              height={"40px"}
            />
            <img
              alt="#14"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              height={"40px"}
            />
          </span>
        </h3>
        <div className="row mt-5 " align="center">
          <h3 className="mt-5 text-center col-md-10 col-sm-5">
            My Stats On Git hub
          </h3>
          <a
            href="https://github.com/mirosh-kavinda"
            className="   download  mt-5 nav-link  col-sm-7 col-md-2 "
          >
            View More
            <span>
              <AiOutlineGithub className="mx-2 socialmedia" size={30} />
            </span>
          </a>
        </div>

        <br />
        <div className="row mx-5">
          <p className="col-md-6 text-end col-sm-12 ">
            <a href="https://github.com/mirosh-kavinda/github-readme-streak-stats">
              <img
                title="🔥 Get streak stats for your profile at git.io/streak-stats"
                alt="Mirosh's streak"
                src="https://streak-stats.demolab.com/?user=mirosh-kavinda&theme=slateorange"
              />
            </a>
          </p>  
          <p className="col-md-6 text-start col-sm-12">
            <a href="https://github.com/mirosh-kavinda/github-readme-stats">
              <img
                alt="mirosh-kavinda's Github Stats"
                src="https://github-readme-stats.vercel.app/api?username=mirosh-kavinda&show_icons=true&count_private=true&theme=slateorange&background=000000"
              />
            </a>
          </p>
          <iframe
            className="text-end col-md-12 col-sm-12 graph"
            height="300"
            width="80%"
            title="Mirosh's Activity Graph"
            src="https://github-readme-activity-graph.cyclic.app/graph?username=mirosh-kavinda&theme=xcode"
            frameborder="0"
          ></iframe>
        </div>

        
        
      
      </div>
      <br />
        <br />

        <br />
    </>
  );
}
