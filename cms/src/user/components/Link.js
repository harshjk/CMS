import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" for={this.props.data.label}>
          {this.props.data.label}
        </label>
        <div className="col-sm-10">
          <a href={this.props.data.value.url}>{this.props.data.value.title}</a>
        </div>
      </div>
    );
  }
}

export default Link;
