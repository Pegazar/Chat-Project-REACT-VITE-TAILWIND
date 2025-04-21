export const handleAddReply = (comments, parentId, newReply) => {
    const updateComments = (commentList) => {
      return commentList.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply]
          };
        }
  
        if (comment.replies && comment.replies.length > 0) {
          return {
            ...comment,
            replies: updateComments(comment.replies)
          };
        }
  
        return comment;
      });
    };
  
    return {
      ...comments,
      comments: updateComments(comments.comments)
    };
  };