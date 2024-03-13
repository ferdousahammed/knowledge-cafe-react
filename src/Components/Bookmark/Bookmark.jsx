import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
  return (
    <div className="p-5 bg-white rounded-2xl">
      <h3 className="text-lg font-semibold">{bookmark.title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.array,
};

export default Bookmark;
