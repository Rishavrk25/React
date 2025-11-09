import { createContext, useEffect, useReducer, useState } from "react";

export const MyContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  loading: false,
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const MyProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [loading, setLoading] = useState(false);

   // Fetch posts with useEffect
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    if (postList.length === 0) {
      fetch("https://dummyjson.com/posts", { signal: signal })
        .then((res) => res.json())
        .then((data) => {
          addInitialPosts(data.posts);
          setLoading(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            console.error("Error fetching posts:", err);
            setLoading(false);
          }
        });
    } else {
      setLoading(false);
    }
    return () => {
      controller.abort(); // Cleanup to abort fetch on unmount
    };
  }, []);

  const addPost = (post) => {
    console.log("Adding post:", post);
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  

  return (
    <MyContext.Provider
      value={{ postList, addPost, deletePost,loading}}
    >
      {children}
    </MyContext.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
//     reactions: 2,
//     userId: "user-9",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Paas ho bhai",
//     body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
//     reactions: 15,
//     userId: "user-12",
//     tags: ["Graduating", "Unbelievable"],
//   },
// ];

export default MyProvider;
