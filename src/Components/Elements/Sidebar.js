import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ PatientMenu }) => {
  console.log(PatientMenu, "PatientMenu");

  return (
    <div>
      <div className="sidebar bg-light">
        {PatientMenu.map((item) => {
            return (
                <>
                <Link to={item.link} >{item.name}</Link>
                </>
                // <Link to={item.Link}>{item.name}<Link/>

            )
        } )}
      </div>
    </div>
  );
};

export default Sidebar;
