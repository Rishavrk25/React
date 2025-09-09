import React, { useState } from "react";

import Footer from "./components/Footer";
import SideNavbar from "./components/SideNavbar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostList from "./components/PostList";

const App = () => {
  const[selectedTab,setSelectedTab] = useState("Home");
  return (
    <div>
      <SideNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      {selectedTab === "CreatePost" ? <CreatePost/> : <PostList/>}
      <Footer />
    </div>
  );
};

export default App;
