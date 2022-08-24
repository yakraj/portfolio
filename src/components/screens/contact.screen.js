import React, { useState } from "react";
import "../styles/contact.style.css";

export const ContactMe = () => {
  const [FirstName, setfirstName] = useState();
  const [Email, setemail] = useState();
  const [Message, setmessage] = useState();

  const makeComment = (firstName, email, message) => {
    console.log(firstName);
    fetch("https://my-json-server.typicode.com/yakraj/webimages/messages", {
      method: "POST",
      body: JSON.stringify({
        name: firstName,
        email: email,
        message: message,
        id: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="contact-page">
      <div id="contact"></div>
      <div className="contact-icons">
        <a
          href="https://www.youtube.com/channel/UCgg60-0oa2Ikov6ob2YG2tA"
          target="_blank"
        >
          <img
            width="50px"
            alt="youtube"
            src={require("../../image/youtube-icon.png")}
          />
        </a>
        <a href="https://github.com/yakraj" target="_blank">
          <img
            width="50px"
            alt="youtube"
            src={require("../../image/github-icon.png")}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yakraj-pariyar-a28376218/"
          target="_blank"
        >
          <img
            width="42px"
            alt="youtube"
            src={require("../../image/linkedin-icon.png")}
          />
        </a>
      </div>
      {/* <div className="contact-container"> 
        <div className="contact-left">
          <h3 className="contact-me-text">Contact me</h3>
          <div className="contact-recource">
            <a href="mailto:contact@yourdomain.com">
              <img
                alt="email"
                width="30"
                style={{ marginRight: 15 }}
                src={require("../../image/email.svg")}
              />
              Princeyakraj289@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-right">
          <h3 className="contact-me-text">Leave a Message</h3>
          <textarea
            onChange={(e) => setmessage(e.target.value)}
            placeholder="Type your message here"
            rows="4"
            cols="50"
          />
          <input
            onChange={(e) => setfirstName(e.target.value)}
            style={{
              textTransform: "capitalize",
            }}
            type="name"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <div
            onClick={() => {
              makeComment(FirstName, Email, Message);
            }}
            style={{ marginTop: "50px" }}
            class="button"
          >
            Send
          </div>
        </div>
      </div> */}
    </div>
  );
};
