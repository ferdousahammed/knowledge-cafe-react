import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, readTime }) => {
  return (
    <section className="lg:w-[40%] w-full mx-auto space-y-5">
      <div className="border-2 border-indigo-600 bg-indigo-600 bg-opacity-10 px-12 py-5 rounded-2xl">
        <h3 className="text-indigo-600 font-bold lg:text-2xl text-xl text-center">
          Spent time on read : {readTime} min
        </h3>
      </div>
      <div className="min-h-40 bg-neutral-600 bg-opacity-5 lg:p-7 p-4 space-y-4  rounded-2xl">
        <h3 className="lg:text-2xl text-xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h3>
        <div className="space-y-4">
          {bookmarks.map((bookmark) => (
            <Bookmark bookmark={bookmark} key={bookmark.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readTime: PropTypes.number,
};

export default Bookmarks;
