export const handleScoreChange = (comments, commentId, newScore) => {
    const updateCommentScore = (commentList) => {
        return commentList.map(comment => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    score: newScore
                };
            }

            if (comment.replies && comment.replies.length > 0) {
                return {
                    ...comment,
                    replies: updateCommentScore(comment.replies)
                };
            }

            return comment;
        });
    };

    return {
        ...comments,
        comments: updateCommentScore(comments.comments)
    };
};