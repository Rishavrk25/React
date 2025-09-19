import React, { useContext, useRef } from "react";
import { MyContext } from "./MyContext";

const CreatePost = () => {

  const {addPost} = useContext(MyContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/[\s,]+/);

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";

    addPost(userId,postTitle,postBody,reactions,tags);


  }

  return (
    <div className=" p-4 sm:px-20 sm:py-10 bg-gray-800">
      <form className="sm:ml-64  bg-gray-200 p-5 rounded-2xl" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="userId"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter User Id here
          </label>
          <input
            ref={userIdElement}
            type="text"
            id="userId"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your User Id"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Post Title
          </label>
          <input
            ref={postTitleElement}
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Post Content
          </label>
          <textarea
            ref={postBodyElement}
            name="content"
            id="content"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 h-20"
            type="text"
            placeholder="Tell us more about it"
          ></textarea>
        </div>

        <div className="mb-5">
          <label
            htmlFor="reactions"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Number of Reactions
          </label>
          <input
            ref={reactionsElement}
            type="text"
            id="reactions"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="How many people reacted to this post"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="tags"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter your hashtags here
          </label>
          <input
            ref={tagsElement}
            type="text"
            id="tags"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Please enter tags using space"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
