import React, { useRef, useState, useEffect } from "react";
import "../styles/fonts.style.css";
import "../styles/landing.style.css";

import { AboutPageSet } from "./about.screen";
import { MyWorks } from "./works.screen";
import { Navigation } from "./navigation.screen";
import { ContactMe } from "./contact.screen";
export const Landing = () => {
  const TopSite = window.visualViewport.pageTop;
  const WindowWidth = window.visualViewport.width;
  const height = window.innerHeight;
  const reactCol = useRef();
  const cotedReact = useRef();

  // variables for About section abd parallex
  const aboutPage = useRef();
  const [Parallel, setParallel] = useState();
  const InHeight = window.innerHeight / 3;
  const ScrollPar = Parallel / 3;

  // variables for balls and third page

  const DevImage = useRef();
  const [DeviTop, setDeviTop] = useState();

  var BrandingVisibility = 1;

  // variable for node section

  const changeColor = () => {
    reactCol.current.style.color = "red";
  };
  var CrossVisibility = 100;

  var marginTrangle = "";
  if (TopSite > 1600) {
    CrossVisibility = -1;
  }
  if (TopSite > window.visualViewport.height) {
    marginTrangle = window.visualViewport.height - TopSite;
  } else {
    marginTrangle = 0;
  }
  const [animation, setAnimation] = useState();
  const [mobileAnim, setMobileAnim] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const AboutScroll = aboutPage.current.getBoundingClientRect().top;
      const Node = aboutPage.current.getBoundingClientRect().top;

      if (AboutScroll > 0) {
        setParallel(AboutScroll);
        setMobileAnim("");
      } else {
        setMobileAnim("firstSticky");
      }
      const AboutBottom = aboutPage.current.getBoundingClientRect().bottom;
      console.log(AboutScroll);
      const aboutVal = AboutBottom / 36;
      if (aboutVal < 0) {
        if (aboutVal > -10) {
          setAnimation(aboutVal.toString().substring(0, 2));
        } else {
          setAnimation(aboutVal.toString().substring(0, 3));
        }
      }
    });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDeviTop(DevImage.current.getBoundingClientRect().top);
    });
  }, [setDeviTop]);

  return (
    <div style={{ scrollBehaviour: "smooth" }}>
      <Navigation width={WindowWidth} />
      <div
        style={{
          marginTop: `-${InHeight - ScrollPar}px`,
          scrollBehaviour: "smooth",
        }}
        className="landing"
      >
        <div id="About"></div>
        <div className="firstpage">
          <img
            width="150px"
            className="meImage"
            src={require("../../image/me.jpg").default}
          />

          <p className="titleName">Yakraj Pariyar</p>
          <p className="titleTarget">A passinate web and Apps developer.</p>
          <p className="titleDesc">
            I'm a developer from india.I love to make ideas live. I make
            stunning, creative and dynamic websites and apps. Hope once if you
            will give me change to deploy your project I won't make you
            disappoint.
          </p>
        </div>
      </div>
      <div name="portf"></div>

      {/* My about page */}
      <div
        style={{ zIndex: CrossVisibility }}
        ref={aboutPage}
        className="about"
      >
        <div className="box">
          <div
            style={{
              marginLeft: marginTrangle * 2,
            }}
            className={mobileAnim}
            className="first mobileparFirst"
          >
            <h1>Yakraj</h1>
            <div>
              <h4>Apps Developer</h4>
            </div>
          </div>
          <div
            style={{
              marginLeft: -marginTrangle * 2,
            }}
            className="second mobileparSecond"
          >
            <div>
              <h4>Web Developer</h4>
            </div>
            <h1>Pariyar</h1>
          </div>
        </div>
      </div>

      <div id="about"></div>
      <AboutPageSet
        WindowWidth={WindowWidth}
        height={height}
        TopSite={TopSite}
        marginTrangle={marginTrangle}
      />
      {/* language branding */}

      <div className="secondpage">
        <div className="seleft secondPageleft">
          <h1>React</h1>
          <h1 className="react-text">React Native</h1>
          <h1 className="node-text">Node Js</h1>
        </div>
        <div className="seright secondPageright">
          <div className="normal">
            <div>
              <img
                style={{
                  opacity: BrandingVisibility,
                  transition: "all 4s",
                }}
                ref={DevImage}
                width="250"
                alt="react"
                src={require("../../image/web.png")}
              />
              <h1>Web Development</h1>
              <p>A professional way to share your business on internet.</p>
            </div>
            <div>
              <img
                style={{
                  opacity: BrandingVisibility,
                  transition: "all 4s",
                }}
                ref={cotedReact}
                width="170"
                alt="react"
                src={require("../../image/app.png")}
              />
              <h1>Android & IOS Apps</h1>
              <p>Most used devices in the world.</p>
            </div>
          </div>
        </div>
      </div>
      {/* ndoe tree starts at here  */}

      {/* portfolio tree starts from here */}
      <MyWorks WindowWidth={WindowWidth} height={height} />
      <ContactMe />
    </div>
  );
};
