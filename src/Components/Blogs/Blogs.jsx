// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ handleBookmark, markAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("../../../public/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-full lg:w-[60%]">
      <div className="space-y-4">
        {blogs.map((blog) => (
          <Blog
            handleBookmark={handleBookmark}
            markAsRead={markAsRead}
            key={blog.id}
            blog={blog}
          />
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleBookmark: PropTypes.func,
  markAsRead: PropTypes.func,
};

export default Blogs;
