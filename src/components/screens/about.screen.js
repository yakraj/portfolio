import React, { useState, useEffect, useRef } from "react";
import "../styles/about.style.css";
import { files } from "./language.image.seq";
export const AboutPageSet = ({
  WindowWidth,
  height,
  TopSite,
  marginTrangle
}) => {
  var aboutOpacity = "";
  var widthVal = "100%";
  if (height / 2.5 + marginTrangle < 0) {
    aboutOpacity = (height / 2.5 + marginTrangle) * 0.002;
  }

  var ZInxex = 1;

  if (WindowWidth > 769) {
    if (marginTrangle < -height) {
      widthVal = "50%";
    }
  }
  var firstLang = "0px";
  var firstOpacity = 0;
  var secondLang = "0px";
  var secondOpacity = 0;
  var thirdLang = "0px";
  var thirdOpacity = 0;
  var fourthLang = "0px";
  var fourthOpacity = 0;
  var fifthLang = "0px";
  var fifthOpacity = 0;
  var sixthLang = "0px";
  var sixthOpacity = 0;
  var goingup = "0";
  var langSeq = 0;

  var languageimage = -((marginTrangle + 1010) / 15).toString();

  if (languageimage > 70) {
    goingup = "1";
  }
  if (goingup < 10) {
    langSeq = goingup.toString().substring(0, 1);
  }
  if (goingup > 10) {
    langSeq = goingup.toString().substring(0, 2);
  }

  if (marginTrangle < -1010) {
    firstLang = "50px";
    firstOpacity = 1;
  }
  if (marginTrangle < -1200) {
    secondLang = "50px";
    secondOpacity = 1;
  }
  if (marginTrangle < -1400) {
    thirdLang = "50px";
    thirdOpacity = 1;
  }
  if (marginTrangle < -1600) {
    fourthLang = "50px";
    fourthOpacity = 1;
  }
  if (marginTrangle < -1800) {
    fifthLang = "50px";
    fifthOpacity = 1;
  }
  if (marginTrangle < -2000) {
    sixthLang = "50px";
    sixthOpacity = 1;
  }
  if (marginTrangle < 2300) {
    ZInxex = -1;
  }
  return (
    <div
      className="AboutContainer"
      style={{
        height: "100vh",
        background: files[langSeq],
        transition: "all 0.9s",
        width: "100%",
        display: marginTrangle < 0 ? "flex" : "none",
        zIndex: ZInxex,
        position: "fixed",
        flexWrap: "wrap",

        top: 0,
        left: 0
      }}
    >
      <div
        style={{
          opacity: -aboutOpacity,
          width: widthVal
        }}
        className="MyaboutleftSide"
      >
        <h1>Yakraj Pariyar</h1>
        <h2>A passinate web and App Developer</h2>
        <h3>A Creative developer with latest Languages & Features</h3>
        <p style={{ height: firstLang, opacity: firstOpacity }}>
          <img width="30" src={require("../../image/jsicon.png")} alt="react" />
          JavaScript
        </p>
        <p style={{ height: secondLang, opacity: secondOpacity }}>
          <img
            width="30"
            src={require("../../image/htmlicon.png")}
            alt="react"
          />
          HTML
        </p>
        <p style={{ height: thirdLang, opacity: thirdOpacity }}>
          <img
            width="30"
            src={require("../../image/cssicon.png")}
            alt="react"
          />
          CSS
        </p>
        <p style={{ height: fourthLang, opacity: fourthOpacity }}>
          <img
            width="30"
            src={require("../../image/nodeicon.png")}
            alt="react"
          />
          Node
        </p>
        <p style={{ height: fourthLang, opacity: fourthOpacity }}>
          <img
            width="30"
            src={require("../../image/databaseicon.png")}
            alt="react"
          />
          SQL
        </p>
        <p style={{ height: fifthLang, opacity: fifthOpacity }}>
          <img
            width="30"
            src={require("../../image/reacticon.png")}
            alt="react"
          />
          React
        </p>
        <p style={{ height: sixthLang, opacity: sixthOpacity }}>
          <img
            width="30"
            src={require("../../image/reacticon.png")}
            alt="react"
          />
          React Native
        </p>
      </div>
      <div
        className="LanguageImage"
        style={{
          zIndex: ZInxex,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img width="50%" src={require("../../image/languages.png")} />
      </div>
    </div>
  );
};
