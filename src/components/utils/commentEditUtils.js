export const handleDeleteComment = (comments, commentId, setComments) => {
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
    
    return updated;
  };
  
  export const handleEditComment = (comments, commentId, newContent, setComments) => {
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
    
    return updated;
  };