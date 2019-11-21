import React from "react";
import "./jumbotron.scss";

export default function jumbotron() {
  return (
    <section className="jumbotron">
      <div className="top-jumbotron">
        <div className="leftJumbo">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn-jumbotron">Get Started</button>
        </div>
        <div className="rightJumbo" />
      </div>
      <div className="bottom-jumbotron">
        <input type="text" id="text" placeholder="Shorten a link here..." />
        <input type="submit" value="Shorten it!" />
      </div>
    </section>
  );
}
