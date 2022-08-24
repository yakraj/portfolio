import React, { useRef, useEffect, useState } from "react";
import "../styles/works.style.css";

const CrdView = ({ title, img, desc, redirect }) => {
  return (
    <div class="card">
      <div class="skewed">
        <img src={img} alt="" />
      </div>

      <div class="content">
        <h2>{title}</h2>
        <p id="desc">{desc}</p>
        <a href={redirect} target="_blank">
          <button>Visit</button>
        </a>
      </div>
    </div>
  );
};

export const MyWorks = ({ WindowWidth, height }) => {
  var [ImageToggle, setImgeToggle] = useState(false);

  const portFirst = useRef();
  var [PortVal, setPortVal] = useState();
  var [PortZInd, setPortZInd] = useState(-50);
  var [FirstOpacity, setFirstOpacity] = useState(0);

  var FirstTextMargin = "";
  if (PortVal < -330) {
    FirstTextMargin = -250;
  }
  var [SecondPageOp, setSeondOp] = useState(0);
  var [FirstImgOp, setFirstImageOp] = useState();
  var [SecondZindex, setSecondZindex] = useState();
  var [RestaurantAppOp, setRestaurantAppOp] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const portfolioScroller = portFirst.current.getBoundingClientRect().top;
      setPortVal(portfolioScroller);
      if (portfolioScroller < height) {
        setPortZInd(-1);
      } else {
        setPortZInd(-50);
      }
      if (portfolioScroller < 0) {
        setPortZInd(1);
      }
      if (portfolioScroller < -330) {
        setRestaurantAppOp(1);
      } else {
        setRestaurantAppOp(0);
      }

      if (portfolioScroller < height * 2) {
        setFirstOpacity((height / 10 - portfolioScroller) * 0.002);
      }
      if (portfolioScroller < -1294) {
        setFirstOpacity((portfolioScroller + 2000) * 0.0033);
      }
      if (portfolioScroller < -2100) {
        setFirstImageOp(0);
        setSeondOp((portfolioScroller + 2100) * 0.002);
        setSecondZindex(10);
      } else {
        setFirstImageOp(1);
      }
      if (portfolioScroller > -2100) {
        setSeondOp(0);
        setSecondZindex(-1);
      }
    });
  }, [height, setFirstOpacity]);
  // mobile imge seq statrt from here
  var topMobile = (height / 10 - PortVal) / 6.66;

  var [imagePop, setImagePop] = useState();
  var [titlePop, setTitlePop] = useState();

  const ImageMax = () => {
    return (
      <div className="Image-max">
        <div className="Image-title">
          <h2>{titlePop}</h2>

          <img
            style={{ overflow: "auto" }}
            onClick={() => {
              setImgeToggle(false);
            }}
            width="30px"
            src={require("../../image/close.svg").default}
            alt="close"
          />
        </div>
        <div className="singleImage">
          <img src={imagePop} alt="background-imgae" />
        </div>
      </div>
    );
  };

  var [galleryHeight, setGalleryHeight] = useState("150vh");
  var [AllHeight, setAllHeight] = useState(false);

  var [GalleryImages, setGalleryImages] = useState();
  var [RecentWorks, setRecentWorks] = useState();
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/yakraj/webimages/images")
      .then((response) => response.json())
      .then((json) => setGalleryImages(json));

    fetch("https://my-json-server.typicode.com/yakraj/webimages/works")
      .then((response) => response.json())
      .then((json) => setRecentWorks(json));
  }, []);

  if (GalleryImages) {
    const devider = Math.round(GalleryImages.length / 3);
    let i1 = devider + 1;
    let i2 = devider * 2;
    let i3 = GalleryImages.length;
    var rows1 = [];
    var rows2 = [];
    var rows3 = [];
    for (let i = 0; i < i1; i++) {
      rows1.push(i);
    }

    for (i1; i1 < i2; i1++) {
      rows2.push(i1);
    }
    for (i2; i2 < i3; i2++) {
      rows3.push(i2);
    }
  }

  const ImageGallery = () => {
    return (
      <div className="gallery">
        <h3 style={{ width: "9rem" }}>Gallery</h3>
        <div
          style={{
            overflow: "hidden",
            height: galleryHeight,
            transition: "all 3s",
          }}
          className="galley-house"
        >
          {GalleryImages ? (
            <div class="row">
              <div class="column">
                {rows1.map((ing, i) => {
                  return (
                    <img
                      onClick={() => {
                        setImagePop(GalleryImages[rows1[i]].sr);
                        setTitlePop(GalleryImages[rows1[i]].title);
                        setImgeToggle(true);
                      }}
                      alt="pixabayInage"
                      src={GalleryImages[rows1[i]].sr}
                      style={{ width: "100%" }}
                    />
                  );
                })}
              </div>
              <div class="column">
                {rows2.map((ing, i) => {
                  return (
                    <img
                      onClick={() => {
                        setImagePop(GalleryImages[rows2[i]].sr);
                        setTitlePop(GalleryImages[rows2[i]].title);
                        setImgeToggle(true);
                      }}
                      alt="pixabayInage"
                      src={GalleryImages[rows2[i]].sr}
                      style={{ width: "100%" }}
                    />
                  );
                })}
              </div>
              <div class="column third">
                {rows3.map((ing, i) => {
                  return (
                    <img
                      onClick={() => {
                        setImagePop(GalleryImages[rows3[i]].sr);
                        setTitlePop(GalleryImages[rows3[i]].title);
                        setImgeToggle(true);
                      }}
                      alt="pixabayInage"
                      src={GalleryImages[rows3[i]].sr}
                      style={{ width: "100%" }}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <div class="dots">
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          )}
        </div>
        {!AllHeight ? (
          <div
            onClick={() => {
              setGalleryHeight("auto");
              setAllHeight(true);
            }}
            style={{ marginTop: "-50px", marginBottom: "10px" }}
            class="button"
          >
            View More
          </div>
        ) : (
          <div
            onClick={() => {
              setGalleryHeight("150vh");
              setAllHeight(false);
            }}
            style={{ marginTop: "-50px", marginBottom: "10px" }}
            class="button"
          >
            View Less
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div id="portfolio"></div>
      <div
        className="FirstProduct"
        style={{
          height: "100vh",
          display: "flex",
          background: "linear-gradient(45deg, #fbdda7, #9efffb)",
          zIndex: PortZInd,
        }}
      >
        {/* <div style={{ opacity: FirstOpacity }} className="leftSide"> 
          <div
            className="rotatingContainer"
            style={{
              marginLeft: FirstTextMargin,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h1 className="title" style={{ "--i": 3 }}>
              Restaurant App
            </h1>
            <h1 className="desc" style={{ "--i": 2 }}>
              Android/IOS App
            </h1>
            <h1 className="info" style={{ "--i": 1 }}>
              A brilliant and user-friendly mobile app for Restaurant and
              Hotels. Which contains live-location service and gives customer
              better experience.
            </h1>
            <div class="button">Visit</div>
          </div>
          <div
            style={{ opacity: RestaurantAppOp, transition: "all 0.6s" }}
            className="featuresCont"
          >
            <div className="features-details">
              <img
                alt="privacy"
                src={require("../../image/privacy-lock.svg").default}
              />
              <h3>Privacy first</h3>
            </div>
            <div className="features-details">
              <img alt="privacy" src={require("../../image/ios.svg").default} />
              <h3>IOS/Android supported</h3>
            </div>
            <div className="features-details">
              <img
                alt="privacy"
                src={require("../../image/search.svg").default}
              />
              <h3>Searh restaurants and it's details </h3>
            </div>
            <div className="features-details">
              <img
                alt="privacy"
                src={require("../../image/location.svg").default}
              />
              <h3>Live Geo-Location</h3>
            </div>
            <div className="features-details">
              <img
                alt="privacy"
                src={require("../../image/favourite.svg").default}
              />
              <h3>Make favourites</h3>
            </div>
            <div className="features-details">
              <img
                alt="privacy"
                src={require("../../image/payment.svg").default}
              />
              <h3>Secure Payments Method</h3>
            </div>
          </div>
        </div> */}
        <div className="RightSide">
          <img
            style={{ opacity: FirstImgOp, transition: "all 0.3s" }}
            width="45%"
            alt="Mobile Device"
            src={require("../../image/mobile.png")}
          />
        </div>
      </div>
      <div
        style={{
          opacity: -SecondPageOp,
          transition: "all 0.3s",
          zIndex: SecondZindex,
        }}
        className="secondProduct"
      >
        <div className="secPLeft">
          <h1>Company Data Entry</h1>
          <h3>Specialyzed online web for Industrials companies.</h3>
          <p>
            This is very special web applicaton for company level, which is
            acccessable from anywhere with major Privacy, once you login through
            your own crediantials you willl be allowed to see and make changes
            on app.
          </p>
          <div class="button">Visit</div>
        </div>
        <div className="secPRight">
          <img
            width="70%"
            alt="Data-entry-web"
            src={require("../../image/data-entry.png")}
          />
        </div>
      </div>
      <div ref={portFirst} style={{ height: "500vh" }}></div>
      <div className="recent-works">
        <h3 style={{ textAligh: "center", width: "100%" }}>Recent Works</h3>

        {/* card view starts here */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {RecentWorks ? (
            RecentWorks.map((ca, i) => {
              return (
                <CrdView
                  title={RecentWorks[i].title}
                  img={RecentWorks[i].img}
                  desc={RecentWorks[i].desc}
                  redirect={RecentWorks[i].redirect}
                />
              );
            })
          ) : (
            <div class="dots">
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          )}
        </div>
        {/* cardview ends here */}
        {/* <div className="postArchive"> 
          <div class="archive">
            <div class="background">
              <p className="desc">A beautiful website from new person</p>
            </div>
            <p className="title">hello there</p>
          </div>
          <div class="archive">
            <div class="background">
              <p className="desc">A beautiful website from new person</p>
            </div>
            <p className="title">hello there</p>
          </div>
          <div class="archive">
            <div class="background">
              <p className="desc">A beautiful website from new person</p>
            </div>
            <p className="title">hello there</p>
          </div>
          <div class="archive">
            <div class="background">
              <p className="desc">A beautiful website from new person</p>
            </div>
            <p className="title">hello there</p>
          </div>
          <div class="archive">
            <div class="background">
              <p className="desc">A beautiful website from new person</p>
            </div>
            <p className="title">hello there</p>
          </div>
          <div class="archive">
            <div class="background">
              <p className="desc">A beautiful website from new person</p>
            </div>
            <p className="title">hello there</p>
          </div>
        </div> */}

        <ImageGallery />
      </div>
      {ImageToggle && <ImageMax />}
    </div>
  );
};
