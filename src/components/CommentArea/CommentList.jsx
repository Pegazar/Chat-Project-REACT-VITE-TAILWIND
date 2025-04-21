import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments, currentUser, handleAddReply, handleScoreChange, handleDeleteComment, handleEditComment }) => {
  return (
    <div className="flex flex-col gap-3 mt-10">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
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

export default CommentList