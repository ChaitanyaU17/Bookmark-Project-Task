import React from "react";

const BookmarkList = ({ bookmarks, onDeleteBookmark, onEditBookmark }) => {
  return (
    <div className="ml-4 mt-4">
      <h2 className="font-bold">All Bookmarks</h2>
      <ul>
        {bookmarks.map((bookmark, index) => (
          <li key={index} className="m-2">
            <div>
              <span>{bookmark.title}</span>
              <span>{' > '}</span>
              <a href={bookmark.url} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">{bookmark.url}</a>
              <button 
                className="ml-2 p-0.5 border border-solid border-black" 
                onClick={() => onDeleteBookmark(index)}
              >
                Delete
              </button>
              <button 
                className="ml-2 p-0.5 border border-solid border-black"
                onClick={() => onEditBookmark(index, prompt("Enter new title"), prompt("Enter new URL"))}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookmarkList;
