import { Component } from "react";
import Head from "../Head";
import Nav from "../Nav";
import Course from "../Course";
import "./index.css";

const tabs = [
  { id: "RESOURCES", val: "Resources" },
  { id: "REQUESTS", val: "Requests" },
  { id: "USERS", val: "Users" },
];

class Home extends Component {
  state = { activeTab: tabs[0].id };

  changeTab = (ids) => {
    this.setState({ activeTab: ids });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="main">
        <Head />
        <Nav activeId={activeTab} chagetab={this.changeTab} />
        <Course activeId={activeTab} />
      </div>
    );
  }
}

export default Home;
