/******************************************
 *  Author : Harsh Jagdishbhai Kevadia
 *  Created On : Thu Nov 30 2017
 *  File : index.js
 *******************************************/
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import SingleStructure from "./SingleStructure";
import SingleEntry from "./SingleEntry";

class Structure extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    const { url } = match;
    return (
      <div className="pokemon-page">
        <Switch>
          <Route path={`${url}/:structure/:entry`} component={SingleEntry} />
          <Route path={`${url}/:structure`} component={SingleStructure} />
          <Redirect from="/" to={`/`} />
        </Switch>
      </div>
    );
  }
}

export default Structure;
