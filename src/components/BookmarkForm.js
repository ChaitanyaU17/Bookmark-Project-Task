import React, { useState } from "react";

const BookmarkForm = ({ onAddBookmark }) => {
  const [websiteTitle, setWebsiteTitle] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  const handleAddBookmark = () => {
    if (websiteTitle && websiteUrl) {
      const newBookmark = { title: websiteTitle, url: websiteUrl };
      onAddBookmark(newBookmark);
      setWebsiteTitle("");
      setWebsiteUrl("");
    }
  };

  return (
    <div>
      <h1 className="text-center font-extrabold m-4 p-4 text-xl">Bookmark Website</h1>
      <div className="ml-4">
          <div className="mt-4">
              <label htmlFor="website-title"> Website Title:
                  <input
                      className="ml-4 px-2 py-1 border border-solid border-black rounded-lg"
                      type="text"
                      id="website-title"
                      value={websiteTitle}
                      onChange={(e) => setWebsiteTitle(e.target.value)}
                  />
              </label>
          </div>
          <div className="mt-4">
              <label htmlFor="website-url"> Website URL :
                  <input
                      className="ml-4 px-2 py-1 border border-solid border-black rounded-lg"
                      type="text"
                      id="website-url"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                  />
              </label>
          </div>
          <div className="mt-4">
              <button className="p-1 border border-solid border-black" onClick={handleAddBookmark}>ADD</button>
          </div>
      </div>
    </div>
  );
};

export default BookmarkForm;