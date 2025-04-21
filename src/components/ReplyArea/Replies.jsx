import React from "react";
import Comment from "../CommentArea/Comment";

const Replies = ({ replies, currentUser, handleAddReply, handleScoreChange, handleDeleteComment, handleEditComment}) => {
  if (!replies || replies.length === 0) return null;

  return (
    <div className="border-l-2 border-[#e9e9e9] pl-10 flex flex-col gap-3">
      {replies.map((reply) => (
        <Comment
          key={reply.id}
          comment={reply}
          currentUser={currentUser}
          handleAddReply={handleAddReply}
          handleScoreChange={handleScoreChange}
          handleDeleteComment={handleDeleteComment}
          handleEditComment={handleEditComment}
        />
      ))}
    </div>
  );
};

export default Replies;
