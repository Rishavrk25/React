import React, { useState } from "react";

import Footer from "./components/Footer";
import SideNavbar from "./components/SideNavbar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostList from "./components/PostList";
import MyProvider from "./components/MyContext";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <MyProvider>
      <div className="bg-gray-800">
        <SideNavbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "CreatePost" ? <CreatePost /> : <PostList />}
        <Footer />
      </div>
    </MyProvider>
  );
};

export default App;
