import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
}

export const MyContext = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  return currPostList;
};
const MyProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_CONTEXT);
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <MyContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
