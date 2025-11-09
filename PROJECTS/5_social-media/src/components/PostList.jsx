import React, { useContext } from "react";
import Post from "./Post";
import { MyContext } from "./MyContext";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, loading } = useContext(MyContext);
  

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading && postList.length === 0 && <WelcomeMessage />}
      {!loading && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
