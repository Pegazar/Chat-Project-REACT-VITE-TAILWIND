import React, { useState } from "react";
import commentsData from '../../../data.json';
import CommentList from "./CommentList";
import { handleScoreChange as scoreHandler } from "../utils/commentScoreUtils";
import { handleAddReply as replyHandler } from "../utils/commentReplyUtils";

const CommentSection = () => {
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem("comments");
    return saved ? JSON.parse(saved) : commentsData;
  });

  const [currentUser] = useState(commentsData.currentUser);

  const handleDeleteComment = (commentId) => {
    const deleteComment = (commentList) => {
      const filtered = commentList.filter(comment => comment.id !== commentId);
      return filtered.map(comment => {
        if (comment.replies && comment.replies.length > 0) {
          return {
            ...comment,
            replies: deleteComment(comment.replies)
          };
        }
        return comment;
      });
    };

    const updated = {
      ...comments,
      comments: deleteComment(comments.comments)
    };

    setComments(updated);
    localStorage.setItem("comments", JSON.stringify(updated));
  };

  const handleEditComment = (commentId, newContent) => {
    const updateCommentContent = (commentList) => {
      return commentList.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            content: newContent
          };
        }

        if (comment.replies && comment.replies.length > 0) {
          return {
            ...comment,
            replies: updateCommentContent(comment.replies)
          };
        }

        return comment;
      });
    };

    const updated = {
      ...comments,
      comments: updateCommentContent(comments.comments)
    };

    setComments(updated);
    localStorage.setItem("comments", JSON.stringify(updated));
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

  

  return (
    <div className="flex items-start justify-center h-screen relative">
      <CommentList
        comments={comments.comments}
        currentUser={currentUser}
        handleAddReply={handleAddReply}
        handleScoreChange={handleScoreChange}
        handleDeleteComment={handleDeleteComment}
        handleEditComment={handleEditComment}
      />
    </div>
  );
};

export default CommentSection;
