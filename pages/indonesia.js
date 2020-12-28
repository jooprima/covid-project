import React from "react";
import IndexPage from "../components/Dashboard/IndexPage";
import fetch from "isomorphic-fetch";

const config = require("../config.json");

class Indonesia extends React.Component {
  static async getInitialProps() {
    const data = await fetch(`${config["kawal-corona"].base_url}/indonesia`);
    const items = await data.json();
    return {
      items,
    };
  }
  render() {
    const { items } = this.props;
    return <IndexPage isGlobal={false} data={items} />;
  }
}

export default Indonesia;
