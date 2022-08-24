import React, { useEffect, useRef, useState } from "react";

export const Portfolio = ({ x, i }) => {
  const Embed = useRef();
  const [emulator, onEmulator] = useState(false);

  return (
    <div key={i} className="mywork-container">
      {/* left side */}
      <div className="mywork-details-container">
        {/* top title and keyword */}
        <div className="mywork-title-container">
          <h1>{x.title}</h1>
          <h3>{x.subTitle}</h3>
        </div>
        {/* this is for description and key works */}
        <div className="mywork-description-container">
          {/* this is little description of my work */}
          <div className="mywork-description">
            <p>{x.description}</p>
          </div>
          {/* this is for working keys */}
          <div className="mywork-features-container">
            {x.keywords.map((y, e) => {
              return (
                <div key={e} className="mywork-features">
                  {/* these are items for working keys */}

                  <img
                    width="20px"
                    alt="sitepoint"
                    src={require("../../image/sitepoint.svg").default}
                  />
                  <p>{y}</p>
                </div>
              );
            })}
          </div>
        </div>
        <a
          style={{ textDecoration: "none" }}
          className="button"
          href={x.visit}
          target="_blank"
        >
          Visit
        </a>
      </div>
      {/* right side */}
      <div className="right-side-image">
        {!emulator && <img width="100%" alt={x.title} src={x.thumbnail} />}
        {emulator && (
          <iframe
            ref={Embed}
            scrolling="no"
            style={{ height: "550px", border: "none", overflow: "hidden" }}
            src="https://appetize.io/embed/vyeh6et3zosa7drfjcg6ry5boq?device=pixel4&osVersion=11.0&scale=65"
            title="Mobile app Embed"
          ></iframe>
        )}
        {x.type === "mobile" && !emulator ? (
          <div onClick={() => onEmulator(true)} className="button">
            Play
          </div>
        ) : null}
      </div>
    </div>
  );
};
