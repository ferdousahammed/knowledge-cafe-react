import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookmark = (blog) => {
    if (!bookmarks.includes(blog)) {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
    } else {
      const newBookmarks = [...bookmarks];
      newBookmarks.splice(newBookmarks.indexOf(blog), 1);
      setBookmarks(newBookmarks);
    }
  };

  const markAsRead = (time, blog) => {
    setReadTime(readTime + time);
    const newBookmarks = [...bookmarks];
    bookmarks.includes(blog) &&
      (newBookmarks.splice(newBookmarks.indexOf(blog), 1),
      setBookmarks(newBookmarks));
  };

  return (
    <>
      <Header />
      <main className="flex justify-between gap-8 flex-col-reverse lg:flex-row lg:mx-[5%] max-w-screen-2xl mx-[2%] my-4 lg:my-8">
        <Blogs handleBookmark={handleBookmark} markAsRead={markAsRead} />
        <Bookmarks bookmarks={bookmarks} readTime={readTime} />
      </main>
    </>
  );
}

export default App;
