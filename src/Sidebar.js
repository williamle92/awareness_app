import React from "react";
import SidebarRow from "./components/SidebarRow";
import "./components/Sidebar.css";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName} src={user.photoURL} />
      <SidebarRow title="Meditate" Icon={AllInclusiveIcon} />
      <SidebarRow title="Journal" Icon={BorderColorOutlinedIcon} />
      <SidebarRow title="Github" Icon={AccountTreeIcon} />
    </div>
  );
}

export default Sidebar;
