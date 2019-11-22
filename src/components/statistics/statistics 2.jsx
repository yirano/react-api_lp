import React, { Component } from "react";
import BrandIcon from "../../imgs/icon-brand-recognition.svg";
import DetailedIcon from "../../imgs/icon-detailed-records.svg";
import CustomizableIcon from "../../imgs/icon-fully-customizable.svg";
import "./statistics.scss";

export class statistics extends Component {
  state = {
    cards: [
      {
        id: 0,
        icon: BrandIcon,
        title: "Brand Recognition",
        caption:
          "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
      },
      {
        id: 1,
        icon: DetailedIcon,
        title: "Detailed Records",
        caption:
          "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
      },
      {
        id: 2,
        icon: CustomizableIcon,
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

        <div className="cardContainer">
          {this.state.cards.map(({ id, title, icon, caption }) => {
            return (
              <div className="card" key={id}>
                <div
                  className="icon"
                  style={{ backgroundImage: `url(${icon})` }}
                />
                <div className="cardWordWrap">
                  <h3>{title}</h3>
                  <p>{caption}</p>
                </div>
              </div>
            );
          })}
          <div className="border" />
        </div>
      </section>
    );
  }
}

export default statistics;
