import React from "react";
import Reply from "./Reply";


const ReplyBox = ({ user, currentUser, parentId, handleAddReply, onClose }) => {
  return (
    <Reply
      replyingTo={user.username}
      currentUser={currentUser}
      parentId={parentId}
      onReply={(text) => {
        const newReply = {
          id: Date.now(),
          content: text,
          createdAt: Date.now(),
          score: 2,
          replyingTo: user.username,
          user: currentUser,
        };
        handleAddReply(parentId, newReply);
        onClose();
      }}
    />
  );
};

export default ReplyBox;
