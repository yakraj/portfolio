import React, { useState, useEffect } from "react";
import "../styles/navigation.style.css";
export const Navigation = ({ width }) => {
  const Buttons = ({ children, image, Width, href, click }) => {
    return (
      <div style={{ width: Width }} className="navButton">
        <a onClick={click} href={href} className="innnerNav">
          <img
            style={{ marginTop: "10px" }}
            className="navImage"
            alt={children}
            src={require(`../../image/${image}.svg`)}
            height="30px"
            width="30px"
          />
          <h3>{children}</h3>
        </a>
      </div>
    );
  };

  var buttonClass = "navigation-close";
  const [mobileTab, setMobileTab] = useState();
  const [navHeight, setNavHeight] = useState("0%");
  const [navRadius, setNavRadius] = useState("0px 0px 50% 50%");
  useEffect(() => {
    window.innerWidth < 768 ? setNavHeight("0%") : setNavHeight("100%");
    window.addEventListener("resize", () => {
      window.innerWidth < 768 ? setNavHeight("0%") : setNavHeight("100%");
    });
  }, []);
  const ToggleButton = () => {
    if (window.innerWidth < 768) {
      if (!mobileTab) {
        setMobileTab("close");
        setNavHeight("100%");
        setNavRadius("0px 0px 0% 0%");
      } else {
        setMobileTab("");
        setNavHeight("0%");
        setNavRadius("0px 0px 50% 50%");
      }
    }
  };

  return (
    <div
      style={{ height: navHeight, borderRadius: navRadius }}
      className="navigationContainer"
    >
      <div
        onClick={() => ToggleButton()}
        className={`${buttonClass} ${mobileTab}`}
      ></div>

      <div>
        <Buttons click={ToggleButton} href="#top" image="home">
          Home
        </Buttons>
        <Buttons click={ToggleButton} href="#about" image="person">
          about
        </Buttons>
        <Buttons
          click={ToggleButton}
          href="#portfolio"
          Width="180px"
          image="book"
        >
          Poftfolio
        </Buttons>

        <Buttons
          click={ToggleButton}
          href="#contact"
          Width="170px"
          image="mail"
        >
          contact
        </Buttons>
      </div>
    </div>
  );
};
