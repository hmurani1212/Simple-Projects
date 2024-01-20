import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function Blog() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const apiUrl = 'http://localhost:5000/api/v1/BlogPost';
  const [showModal, setShowModal] = React.useState(false);
  const [getblog, setgetblog] = useState("");
  const [getdescription, stgetdescription] = useState("");
  const [blogId1, setblogId] = useState()

  const handlePostBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(apiUrl, { title, description });
      fetchPosts();
    } catch (error) {
      console.error('Error:', error);
      // Handle error, show a message to the user, etc.
    }
  };
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/getPost");
      setPosts(response.data.blog);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const handleDeleteBlog = async (blogId) => {

    try {
      await axios.delete(`http://localhost:5000/api/v1/deleteBlog/${blogId}`);
      // If successful, you might want to fetch the updated list of posts
      fetchPosts();
    } catch (error) {
      console.error(`Error deleting blog with ID ${blogId}:`, error);
    }
  };
  const handlegetBlog = async (blogId) => {
    setShowModal(true);
    setblogId(blogId)
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/getPost1/${blogId}`);
      const data = response.data.blog;
      setgetblog(data.title);
      stgetdescription(data.description)
    } catch (error) {
      console.error(`Error deleting blog with ID ${blogId}:`, error);
    }
  };
  const UpdateHandle = async (e) => {
    e.preventDefault();
    console.log(blogId1);
    try {
      const response = await axios.put(`http://localhost:5000/api/v1/UpdateBlog/${blogId1}`, {
        title: getblog,  // Use getblog instead of title
        description: getdescription,  // Use getdescription instead of description
      });
      setTimeout(() => {
        setShowModal(false);
      }, 1000);
      fetchPosts()
      // Optionally, redirect to the updated blog or handle the updated data
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  }

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center overflow-x-auto items-center flex  overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[800px] bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Add New Staff
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form className="max-w-sm mx-auto" onSubmit={UpdateHandle}>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Ttile
                    </label>
                    <input
                      type="text"
                      id="text" value={getblog} onChange={(e) => setgetblog(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Update your Blogs"
                      required=""
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Descriptio
                    </label>
                    <input
                      type="text"
                      id="text" value={getdescription} onChange={(e) => stgetdescription(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        defaultValue=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
                <button
                  type="submit"
                  className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => setShowModal(false)} >
                  Cancel
                </button>
              </div>

            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className='text-2xl text-center font-bold mt-3 underline'>Create your Blog</div>
      <form className="max-w-sm mx-auto" onSubmit={handlePostBlog}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter title
          </label>
          <input
            type="text"
            id="text" value={title} onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Tile of Blogs"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <input
            type="text"
            id="text" value={description} onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-50 md:w-[500px] md:h-[50px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder='Enter your Blog Here'
            required=""
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <h1 className='text-2xl text-center font-bold mt-5 my-5'>Your Blogs</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {posts.map((element) => {
          return (
            <div>
              <a
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {element.title} <span className="md:ml-7 cursor-pointer" onClick={() => handlegetBlog(element._id)}><EditIcon /></span> <span className='cursor-pointer' onClick={() => handleDeleteBlog(element._id)}><DeleteIcon /></span>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {element.description}
                </p>
              </a>

            </div>
          )
        })}

      </div>


    </>
  )
}

export default Blog