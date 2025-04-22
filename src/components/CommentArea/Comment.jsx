import React, { useState } from "react";
import ReplyIcon from "../ReplyArea/ReplyIcon";
import Replies from "../ReplyArea/Replies";
import ReplyData from "../ReplyArea/ReplyData";
import CommentTime from "./CommentTime";
import CommentScore from "./CommentScore";
import DeleteIcon from "../../assets/icon-delete.svg";
import EditIcon from "../../assets/icon-edit.svg";
import DeleteReply from "../ReplyArea/DeleteReply";
import EditReply from "../ReplyArea/EditReply";

const Comment = ({
  comment,
  currentUser,
  handleAddReply,
  handleScoreChange,
  handleDeleteComment,
  handleEditComment,
}) => {
  const { score, user, createdAt, content, id, replies } = comment;
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const isReply = !!comment.replyingTo;
  const isCurrentUser = user.username === currentUser.username;

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    handleDeleteComment(id);
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
      <div className="bg-white p-6 m-4 md:m-0 rounded-xl shadow-sm flex flex-col-reverse md:flex-row gap-4 max-w-3xl relative">
        <CommentScore
          initialScore={score}
          onScoreChange={(newScore) => handleScoreChange(id, newScore)}
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-start md:justify-center gap-4">
              <img
                className="w-8 h-8"
                src={user.image.webp}
                alt={user.username}
              />
              <span className="font-semibold">{user.username}</span>
              {isCurrentUser && (
                <span className="bg-[#5357B6] text-white text-xs px-2 py-1 rounded">
                  you
                </span>
              )}
              <CommentTime createdAt={createdAt} isReply={isReply} />
            </div>

            <div className="flex items-center justify-center gap-4 absolute bottom-8 right-6 md:bottom-0 md:right-0 md:relative">
              {isCurrentUser ? (
                <>
                  <button
                    onClick={handleDeleteClick}
                    className="flex items-center gap-2 cursor-pointer group text-[#ED6368] hover:text-[#FFB8BB] duration-200"
                  >
                    <img src={DeleteIcon} alt="Delete" />
                    <span className="font-semibold">Delete</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2 cursor-pointer group text-[#5357B6] hover:text-[#C9C9E6] duration-200"
                  >
                    <img src={EditIcon} alt="Edit" />
                    <span className="font-semibold">Edit</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowReplyBox((prev) => !prev)}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <ReplyIcon className="text-[#5357B6] group-hover:text-[#C9C9E6] duration-200" />
                  <span className="font-semibold text-[#5357B6] group-hover:text-[#C9C9E6] duration-200">
                    Reply
                  </span>
                </button>
              )}
            </div>
          </div>

          {isEditing ? (
            <EditReply
              initialContent={content}
              onSave={(newContent) => {
                handleEditComment(id, newContent);
                setIsEditing(false);
              }}
            />
          ) : (
            <p className="text-[#85888C] text-md mt-3">{content}</p>
          )}

          <DeleteReply
            showDeleteModal={showDeleteModal}
            onCancel={handleCancelDelete}
            onDelete={handleConfirmDelete}
          />
        </div>
      </div>

      {showReplyBox && (
        <ReplyData
          user={user}
          currentUser={currentUser}
          parentId={id}
          handleAddReply={handleAddReply}
          onClose={() => setShowReplyBox((prev) => !prev)}
        />
      )}

      <div className="max-w-3xl">
        <Replies
          replies={replies}
          currentUser={currentUser}
          handleAddReply={handleAddReply}
          handleScoreChange={handleScoreChange}
          handleDeleteComment={handleDeleteComment}
          handleEditComment={handleEditComment}
        />
      </div>
    </>
  );
};

export default Comment;