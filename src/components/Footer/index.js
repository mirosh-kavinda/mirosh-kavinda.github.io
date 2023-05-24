import React from "react";
import "../../css/footer.css";
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineCopyright,
  AiOutlineGithub,
  
} from "react-icons/ai";

import {
  BsMedium
  
} from "react-icons/bs";
import {
  MdOutlineWavingHand
  
} from "react-icons/md";
import { BsArrowUpSquare } from "react-icons/bs";
import useBackToTop from "../../hooks/useBackToTop";
const Footer = () => {
  const { showButton, scrollToTop } = useBackToTop();
  return (
    <>
      <div>
        {showButton && (
          <div className=" footer">
            <div className="row d-flex align-items-center ">
              <div className=" col-md-4 col-sm-4">
              <a href="https://medium.com/@kavindahgm">
            <BsMedium
              className=" mx-2   link text-white "
              size={30}
            />
          </a>
          <a href="https://clubhouse.com/@miroshkavinda">
            <MdOutlineWavingHand
              className="mx-2    link text-white "
              size={30}
            />
          </a>
              
              <a href="https://www.youtube.com/channel/UCyh9fiUradbIUVCde2N6oYg ">
                <AiOutlineYoutube
                  className="mx-2   link text-white "
                  size={30}
                />
              </a>
          
              <a href="https://www.twitter.com/mirosh_kavinda/">
                <AiOutlineTwitter
                  className="mx-2  link text-white "
                  size={30}
                />
              </a>
              <a href="https://www.linkedin.com/in/mirosh-kavinda-988042159/">
                <AiOutlineLinkedin
                  className="mx-2  link text-white "
                  size={30}
                />
              </a>
              <a href="https://github.com/mirosh-kavinda">
                <AiOutlineGithub
                  className="mx-2  link text-white "
                  size={30}
                />
              </a>
                <p
                  onClick={scrollToTop}
                  className="  back-to-top nav-link col-md-1 "
                >
                  <BsArrowUpSquare className="mx-2 link" size={35} />
                </p>
              </div>
              <p className=" footer-head  col-md-5 col-sm-3 ">
                <AiOutlineCopyright />
                2023 Alright reserved for @mirosh_kavinda  <a href="https://github.com/mirosh-kavinda/portfolio" id="code_src"> || Source Code </a>
              </p>
           
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
