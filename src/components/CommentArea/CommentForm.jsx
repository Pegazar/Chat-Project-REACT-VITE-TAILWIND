import React, { useState } from "react";

const CommentForm = ({ currentUser, handleAddComment }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    const newComment = {
      id: Date.now(),
      content: value,
      createdAt: Date.now(),
      score: 0,
      user: currentUser,
      replies: [],
    };

    handleAddComment(newComment);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm m-4 md:m-0">
        <img src={currentUser.image.png} className="w-9 h-9" alt="user" />
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:items-start md:gap-3 w-full">
            <textarea
              className="w-full px-4 py-2 rounded-lg outline-none resize-none border text-[#1a1b3a] border-[#5357B6] font-normal"
              rows={3}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={`Add a comment...`}
            />
            <div className="flex justify-end md:justify-start mt-3 md:mt-0">
              <button
                type="submit"
                className="bg-[#5357B6] hover:bg-[#C9C9E6] text-white font-semibold px-6 py-2.5 rounded-lg uppercase cursor-pointer duration-250 md:whitespace-nowrap"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
