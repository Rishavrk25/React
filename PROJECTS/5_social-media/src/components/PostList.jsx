import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { MyContext } from "./MyContext";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(MyContext);
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();
  const signal = controller.signal;
  // Fetch posts with useEffect
  useEffect(() => {
    setLoading(true);
    if (postList.length === 0) {
      fetch("https://dummyjson.com/posts", { signal: signal })
        .then((res) => res.json())
        .then((data) => {
          addInitialPosts(data.posts);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching posts:", err);
          setLoading(false);
        });
        return () => { controller.abort();  // Cleanup to abort fetch on unmount
      }
    }
  }, []);

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
