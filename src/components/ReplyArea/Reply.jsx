import React, { useState } from "react";

const Reply = ({ replyingTo, currentUser, onReply, parentId }) => {
  const [text, setText] = useState(`@${replyingTo} `);

  const handleSend = () => {
    if (text.trim()) {
      onReply(text);
      setText(`@${replyingTo}`);
    }
  };

  return (
    <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm">
      <img src={currentUser.image.png} className="w-9 h-9" alt="user" />
      <textarea
        className="w-full px-4 py-2 rounded-lg outline-none resize-none border text-[#1a1b3a] border-[#5357B6] font-normal"
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Replying to @${replyingTo}`}
      />
      <button
        className="bg-[#5357B6] hover:bg-[#C9C9E6] text-white font-semibold px-6 py-2.5 rounded-lg h-fit uppercase cursor-pointer duration-250"
        onClick={handleSend}
      >
        Reply
      </button>
    </div>
  );
};

export default Reply;
