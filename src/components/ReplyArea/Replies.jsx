import React from "react";
import Comment from "../CommentArea/Comment";

const Replies = ({
  replies,
  currentUser,
  handleAddReply,
  handleScoreChange,
  handleDeleteComment,
  handleEditComment,
}) => {
  if (!replies || replies.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="pl-4 md:pl-10 border-l-2 border-[#e9e9e9]">
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
    </div>
  );
};

export default Replies;
