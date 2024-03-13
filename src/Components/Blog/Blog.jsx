import { IoBookmarksOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const Blog = ({ blog, handleBookmark, markAsRead }) => {
  const {
    author,
    author_img,
    cover,
    title,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <section className="space-y-5">
      <div className="w-full lg:mb-8 mb-3">
        <img className="w-full rounded-xl" src={cover} alt="" />
      </div>
      {/* ----- */}
      <div className="flex justify-between items-center">
        <div className="flex justify-between gap-3">
          <div className="w-[40px]">
            <img className="w-full" src={author_img} alt="" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-2xl">{author}</h3>
            <p className="font-semibold text-neutral-900 text-opacity-60">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-medium text-xl text-neutral-900 text-opacity-60">
            {reading_time > 9 || "0"}
            {reading_time} mins read
          </p>
          <button onClick={() => handleBookmark(blog)} className="w-5">
            <IoBookmarksOutline />
          </button>
          {/* <img src= alt="" /> */}
        </div>
      </div>

      <h1 className="text-2xl lg:text-4xl font-bold max-w-screen-sm">
        {title}
      </h1>
      <div className="flex justify-start gap-4">
        {hashtags.map((hashtag) => (
          <p key={hashtag}>
            <a href="">#{hashtag}</a>
          </p>
        ))}
      </div>

      <button
        className="text-indigo-600 underline"
        onClick={() => markAsRead(reading_time, blog)}
      >
        Mark As Read
      </button>

      <hr />
    </section>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleBookmark: PropTypes.func,
  markAsRead: PropTypes.func,
};

export default Blog;
