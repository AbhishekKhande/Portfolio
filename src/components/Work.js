import React from "react";
import "./Work.css";
export default function Work() {
  return (
    <>
      <div className="bookall">
        <a
          href="https://book-all-dotcom.vercel.app"
          target={"_blank"}
          className="bookall-img"
        >
          <div className="bookall-img"></div>
        </a>{" "}
        <div className="bookall-desc">
          <br />
          <h1
            style={{
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            BOOKALLDOTCOM
          </h1>
          <h2
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
              textAlign: "center",
              borderBottomColor: "teal",
            }}
          >
            bookalldotcom is a movie, train and bus booking site with user
            authentication and seat selection features.
          </h2>
        </div>
      </div>
      <div
        className="line-solid-black"
        style={{
          height: "0.2%",
          width: "100%",
          backgroundColor: "black",
        }}
      ></div>
      <div className="homeauto">
        <div className="homeauto-img"></div>
        <div className="homeauto-desc">
          <br />
          <h1 style={{ textAlign: "center" }}>HOME AUTOMATION SYSTEM</h1>
          <h2 style={{ textTransform: "uppercase", textAlign: "center" }}>
            Home Automation System is an IOT based automation system built on
            JavaScript Environment to help uniform development for developers.
          </h2>
        </div>
      </div>
    </>
  );
}
