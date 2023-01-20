import React from "react";
import { Link } from "react-router-dom";

const Doctor_Dashbord = () => {
  return (
    <div>
      Doctor_Dashbord page
      <Link to={"/appointment"}>
        <h3>Appointment</h3>
      </Link>
    </div>
  );
};

export default Doctor_Dashbord;
