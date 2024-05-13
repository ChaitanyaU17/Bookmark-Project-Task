import React, { useState } from "react";
import BookmarkForm from "./components/BookmarkForm";
import BookmarkList from "./components/BookmarkList";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = (newBookmark) => {
    setBookmarks([...bookmarks, newBookmark]);
  };

  const handleDeleteBookmark = (index) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks.splice(index, 1);
    setBookmarks(updatedBookmarks);
  };

  const handleEditBookmark = (index, newTitle, newUrl) => {
    const updatedBookmarks = [...bookmarks];
    updatedBookmarks[index].title = newTitle;
    updatedBookmarks[index].url = newUrl;
    setBookmarks(updatedBookmarks);
  };

  return (
    <div>
      <BookmarkForm onAddBookmark={handleAddBookmark} />
      <BookmarkList
        bookmarks={bookmarks}
        onDeleteBookmark={handleDeleteBookmark}
        onEditBookmark={handleEditBookmark}
      />
    </div>
  );
};

export default App;