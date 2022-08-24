import React, { useRef, useState, useEffect } from "react";
import "../styles/fonts.style.css";
import "../styles/landing.style.css";

import { AboutPageSet } from "./about.screen";
import { MyWorks } from "./works.screen";
import { Navigation } from "./navigation.screen";
import { ContactMe } from "./contact.screen";
import { Portfolio } from "./portfolio";
import { Gallery } from "./gallery";
export const Landing = () => {
  const [printname, onprintname] = useState("");

  const [text, ontext] = useState("");
  const [text1, ontext1] = useState("");
  const [slogon, onslogon] = useState("");
  useEffect(() => {
    var innerName = "";
    var subdis = "";
    var slogon = "";
    var textt = " Yakraj Pariyar";
    var text1 = " Web & Mobile Developer";
    var text2 =
      " I don't say i'm very creative, but I can put my all effort to make my work easier and better than ever.";
    for (var i = 1; i < textt.length; i++) {
      (function (index) {
        setTimeout(function () {
          innerName = innerName + textt[index];
          ontext(innerName);
        }, i * 200);
      })(i);
    }

    setTimeout(() => {
      for (var i = 1; i < text1.length; i++) {
        (function (index) {
          setTimeout(function () {
            subdis = subdis + text1[index];
            ontext1(subdis);
          }, i * 200);
        })(i);
      }
    }, 3000);
    setTimeout(() => {
      for (var i = 1; i < text2.length; i++) {
        (function (index) {
          setTimeout(function () {
            slogon = slogon + text2[index];
            onslogon(slogon);
          }, i * 100);
        })(i);
      }
    }, 7600);
  }, []);

  const CursorFollower = useRef();
  const cursor = useRef();

  const [data, ondata] = useState([]);
  const [loadingdata, onloadingdata] = useState(false);
  useEffect(() => {
    onloadingdata(true);
    fetch("https://my-json-server.typicode.com/yakraj/webimages/portfolio")
      .then((res) => res.json())
      .then((response) => {
        ondata(response);
        onloadingdata(false);
      })
      .catch((err) => {
        onloadingdata(false);
      });
  }, []);

  const [cursorTop, oncursorTop] = useState();
  const [cursorLeft, oncursorLeft] = useState();
  const [clicked, onclicked] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     oncursorTop(e.pageY - 10);
  //     oncursorLeft(e.pageX - 10);
  //   });

  //   window.addEventListener("click", (e) => {
  //     onclicked(true);

  //     setTimeout(() => {
  //       onclicked(false);
  //     }, 500);
  //   });
  // });

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

  const workfeatures = [
    { id: 1, keyword: "privacy first" },
    { id: 2, keyword: "IOS/Android supported" },
    { id: 1, keyword: "Search restaurants and it's details" },
    { id: 1, keyword: "Live Geo-Location" },
    { id: 1, keyword: "make favourites" },
    { id: 1, keyword: "Secure payments Method" },
  ];
  return (
    <div style={{ scrollBehaviour: "smooth" }}>
      <Navigation width={WindowWidth} />
      {/* this is specially for cursor */}

      <div style={{ top: cursorTop, left: cursorLeft }} id="cursor-ball">
        <div class={clicked ? "clickball" : "firstpoll"}></div>
        <div id="secondpoll"></div>
      </div>
      {/* cursor code ends */}
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
            src={require("../../image/me.jpg")}
          />

          <p className="titleName">{text}</p>
          <p className="titleTarget">{text1}</p>
          <p className="titleDesc">
            {slogon}
            {/* I love to make ideas live. I make
            stunning, creative and dynamic websites and apps. Hope once if you
            will give me change to deploy your project I won't make you
            disappoint. */}
          </p>
          <button className="button">
            Video
            <img
              style={{ marginLeft: "10px" }}
              width="25px"
              alt="play"
              src={require("../../image/play.png")}
            />
          </button>
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
            // className={mobileAnim}
            className="first mobileparFirst"
          ></div>
          <div
            style={{
              marginLeft: -marginTrangle * 2,
            }}
            className="second mobileparSecond"
          ></div>
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
      {/* this is example of my words */}
      <div className="portofolio-container" id="portfolio">
        {data.map((x, i) => {
          return <Portfolio x={x} i={i} />;
        })}
      </div>
      {/* ndoe tree starts at here  */}
      {/* portfolio tree starts from here */}
      <div style={{ background: "#fff" }}>
        <Gallery />
      </div>
      <MyWorks WindowWidth={WindowWidth} height={height} />
      <ContactMe />
    </div>
  );
};
