import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">
          {this.props.data.label}
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id={this.props.data.label}
            className="form-control"
            value={this.props.data.value}
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Link;
