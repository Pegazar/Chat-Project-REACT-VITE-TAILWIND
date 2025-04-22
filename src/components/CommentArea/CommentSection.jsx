import React, { useState } from "react";
import commentsData from '../../../data.json';
import CommentList from "./CommentList";
import { handleScoreChange as scoreHandler } from "../utils/commentScoreUtils";
import { handleAddReply as replyHandler } from "../utils/commentReplyUtils";
import { handleDeleteComment as deleteHandler, handleEditComment as editHandler } from "../utils/commentEditUtils";


const CommentSection = () => {
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem("comments");
    return saved ? JSON.parse(saved) : commentsData;
  });
  const [currentUser] = useState(commentsData.currentUser);

  const handleDeleteComment = (commentId) => {
    const updated = deleteHandler(comments, commentId, setComments);
    setComments(updated);
  };

  const handleEditComment = (commentId, newContent) => {
    const updated = editHandler(comments, commentId, newContent, setComments);
    setComments(updated);
  };

  const handleScoreChange = (commentId, newScore) => {
    const updated = scoreHandler(comments, commentId, newScore);
    setComments(updated);
    localStorage.setItem("comments", JSON.stringify(updated));
  };

  const handleAddReply = (parentId, newReply) => {
    const updated = replyHandler(comments, parentId, newReply);
    setComments(updated);
    localStorage.setItem("comments", JSON.stringify(updated));
  };

  const handleAddComment = (newComment) => {
    setComments({
      ...comments,
      comments: [...comments.comments, newComment]
    });
  };


  return (
    <div className="flex items-start justify-center h-full relative">
      <CommentList
        comments={comments.comments}
        currentUser={currentUser}
        handleAddReply={handleAddReply}
        handleScoreChange={handleScoreChange}
        handleDeleteComment={handleDeleteComment}
        handleEditComment={handleEditComment}
        handleAddComment={handleAddComment}
      />
    </div>
  );
};

export default CommentSection;
