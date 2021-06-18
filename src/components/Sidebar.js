import React from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

function Sidebar() {
  const [{ user }] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow title={user.displayName} src={user.photoURL} />
      <Link to="/meditate">
        <SidebarRow title="Meditate" Icon={AllInclusiveIcon} />
      </Link>
      <Link to="/journal">
        <SidebarRow title="Journal" Icon={BorderColorOutlinedIcon} />
      </Link>
      <a href="https://github.com/williamle92/awareness_app.git">
        <SidebarRow title="Github" Icon={AccountTreeIcon} />
      </a>
      <a href="https://www.linkedin.com/in/williamle92/">
        <SidebarRow title="LinkedIn" Icon={AssignmentIndIcon} />
      </a>
    </div>
  );
}

export default Sidebar;
