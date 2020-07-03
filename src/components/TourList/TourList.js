import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const { tours } = this.state;
    const filteredTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: filteredTours,
    });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className="tour-list">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
