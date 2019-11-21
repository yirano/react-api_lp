import React, { Component } from "react";

export class statistics extends Component {
  state = {
    cards: [
      {
        id: 0,
        icon: "../../imgs/icon-brand-recognition.svg",
        title: "Brand Recognition",
        caption:
          "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your ContentScript."
      },
      {
        id: 1,
        icon: "../../imgs/icon-detailed-records.svg",
        title: "Detailed Records",
        caption:
          "Going insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
      },
      {
        id: 2,
        icon: "../../imgs/icon-fully-customizable.svg",
        title: "Fully Customizable",
        caption:
          "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
      }
    ]
  };
  render() {
    return (
      <section className="statistics">
        <div className="statisticsTitleWrapper">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>
    );
  }
}

export default statistics;
