import React, { Component } from "react";

import classnames from "classnames";
import Loading from "./Loading";
import Panel from "./Panel";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

class Dashboard extends Component {
  state = {
    loading: false,
    focused: null
  };

  selectPanel = (id) => {
    this.setState((prev) => ({ focused: prev.focused ? null : id }));
  };

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
    });
    if (this.state.loading) return <Loading />;

    const panels = data.filter((panelData) => this.state.focused === null || this.state.focused === panelData.id)
      .map((panelData) => {
        const { id, label, value } = panelData;
        return <Panel key={id} id={id} value={value} label={label} onSelect={() => this.selectPanel(id)} />;
      });

    return (
      <main className={dashboardClasses} >{panels}</main>
    );
  };
};

export default Dashboard;
