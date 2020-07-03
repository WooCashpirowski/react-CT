import React, { Component } from "react";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour-wrapper">
        <div className="img-wrapper">
          <img src={img} alt={`tour ${id}`} />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close fa-2x"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5 onClick={this.handleInfo}>
            info
            <span>
              <i className="fas fa-caret-square-down fa-2x"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
