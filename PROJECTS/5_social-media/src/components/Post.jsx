import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { MyContext } from "./MyContext";
const Post = ({ post }) => {
  const {deletePost} = useContext(MyContext);
  return (
    <div className="max-w-sm border border-gray-200 rounded-lg shadow-sm bg-gray-200 dark:border-gray-700 p-4 my-10 sm:ml-70 sm:my-10 relative ml-4 w-[90%]">
      <div className="absolute right-[-1rem] top-[-1rem]  text-white bg-red-600 py-2 px-3 rounded-l-2xl rounded-r-2xl " onClick={() => deletePost(post.id)}>
        <MdDelete />
      </div>
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {post.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">
          {post.body}
        </p>
      </div>
      <div className="ml-3 mb-2">
        {post.tags.map((item) => (
          
          <button
          key={item}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {item}
        </button>
        ))}
      </div>
      <div className="p-4 mb-4 ml-3 rounded-lg bg-green-200 dark:text-green-950 text-sm font-medium">
        This post has been reacted by {post.reactions.likes} people.
      </div>
    </div>
  );
};

export default Post;
