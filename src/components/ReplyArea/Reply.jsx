import React, { useState } from "react";
import TextareaWithSubmit from "./TextAreaWihtSubmit";

const Reply = ({ replyingTo, currentUser, onReply }) => {
  const [text, setText] = useState(`@${replyingTo} `);

  const handleSend = () => {
    if (text.trim()) {
      onReply(text);
      setText(`@${replyingTo}`);
    }
  };

  return (
    <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm m-4 md:m-0">
      <img src={currentUser.image.webp} className="w-9 h-9" alt="user" />
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-start md:gap-3 w-full">
          <TextareaWithSubmit
            value={text}
            onChange={(e) => setText(e.target.value)}
            onSubmit={handleSend}
            placeholder={`Replying to @${replyingTo}`}
          />
          <div className="flex justify-end md:justify-start mt-3 md:mt-0">
            <button
              className="bg-[#5357B6] hover:bg-[#C9C9E6] text-white font-semibold px-6 py-2.5 rounded-lg uppercase cursor-pointer duration-250 md:whitespace-nowrap"
              onClick={handleSend}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reply;
