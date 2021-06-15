import React from "react";
import SidebarRow from "./components/SidebarRow";
import "./components/Sidebar.css";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        title="William"
        src="https://avatars.githubusercontent.com/u/81194035?v=4"
      />
      <SidebarRow title="Meditate" Icon={AllInclusiveIcon} />
      <SidebarRow title="Journal" Icon={BorderColorOutlinedIcon} />
      <SidebarRow title="Github" Icon={AccountTreeIcon} />
    </div>
  );
}

export default Sidebar;
