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
      .then((json) => setGalleryImages(json))
      .catch((err) => {});

    fetch("https://my-json-server.typicode.com/yakraj/webimages/works")
      .then((response) => response.json())
      .then((json) => setRecentWorks(json))
      .catch((err) => {});
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
            transition: "all 3s"
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
      <div className="recent-works">
        <h3 style={{ textAligh: "center", width: "100%" }}>Recent Works</h3>

        {/* card view starts here */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
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

        {/* <ImageGallery /> */}
      </div>
      {ImageToggle && <ImageMax />}
    </div>
  );
};
