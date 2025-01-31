import React from "react";
import Navbar from "./Navbar";
import CurrTasks from "./CurrTasks";
import Recommendation from "./Recommendation";
import ImpactDash from "./ImpactDash";
import AllJobs from "./AllJobs";
import Feature from "./Feature";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <ImpactDash />
      <div className="all-cards">
        <Recommendation />
        <Feature />
        <AllJobs />
      </div>
      <CurrTasks />
    </>
  );
};

export default Dashboard;
