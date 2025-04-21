import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentList = ({ comments, currentUser, handleAddReply, handleScoreChange, handleDeleteComment, handleEditComment, handleAddComment }) => {
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
      <CommentForm 
        currentUser={currentUser}
        handleAddComment={handleAddComment}        
      />
    </div>
  );
};

export default CommentList