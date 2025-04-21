import React, { useState } from "react";
import ReplyIcon from "../ReplyArea/ReplyIcon";
import Replies from "../ReplyArea/Replies";
import ReplyData from "../ReplyArea/ReplyData";
import CommentTime from "./CommentTime";
import CommentScore from "./CommentScore";
import DeleteIcon from "../../assets/icon-delete.svg";
import EditIcon from "../../assets/icon-edit.svg";
import DeleteReply from "../ReplyArea/DeleteReply";

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
  const [editedContent, setEditedContent] = useState(content);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const isReply = !!comment.replyingTo;
  const isCurrentUser = user.username === currentUser.username;

  const handleSaveEdit = () => {
    handleEditComment(id, editedContent);
    setIsEditing(false);
    console.log("Edited content:", editedContent);
  };

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
      <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:items-start gap-4 max-w-3xl">
        <CommentScore
          initialScore={score}
          onScoreChange={(newScore) => handleScoreChange(id, newScore)}
        />
        <div className="w-full">
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-4 mb-3">
              <img
                className="w-8 h-8"
                src={user.image.png}
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

            <div className="flex items-center gap-4">
              {isCurrentUser ? (
                <>
                  <button
                    onClick={handleDeleteClick}
                    className="flex items-center gap-2 cursor-pointer group text-[#ED6368] hover:text-[#FFB8BB] duration-200"
                  >
                    <img src={DeleteIcon} alt="" />
                    <span className="font-semibold">Delete</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2 cursor-pointer group text-[#5357B6] hover:text-[#C9C9E6] duration-200"
                  >
                    <img src={EditIcon} alt="" />
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
            <div className="mt-2">
              <textarea
                className="w-full px-4 py-2 rounded-lg outline-none resize-none border text-[#1a1b3a] border-[#5357B6] font-normal"
                value={editedContent}
                rows={3}
                onChange={(e) => setEditedContent(e.target.value)}
              />
              <div className="flex justify-end mt-2">
                <button
                  className="bg-[#5357B6] hover:bg-[#C9C9E6] text-white font-semibold px-6 py-2 rounded-lg uppercase cursor-pointer duration-300"
                  onClick={handleSaveEdit}
                >
                  Update
                </button>
              </div>
            </div>
          ) : (
            <p className="text-[#85888C] text-md">{content}</p>
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
