import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentList = ({
  comments,
  currentUser,
  handleAddReply,
  handleScoreChange,
  handleDeleteComment,
  handleEditComment,
  handleAddComment,
}) => {
  return (
    <div className="flex flex-col gap-0 my-6 md:my-10 mx-4 md:mx-0">
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

export default CommentList;
