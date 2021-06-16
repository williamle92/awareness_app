import React from "react";

import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed.js";
import { useStateValue } from "../StateProvider";



function SocialMedia() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div >
      <div
        className="app__body"
        image={user.photoURL}
        displayName={user.displayName}
      >
        <Sidebar />
        <Feed />
      </div>
      )
    </div>
  );
}

export default SocialMedia;
