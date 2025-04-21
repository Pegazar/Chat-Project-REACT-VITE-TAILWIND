import React from "react";

const DeleteReply = ({ showDeleteModal, onCancel, onDelete }) => {
  return (
    <>
      {showDeleteModal && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-start max-w-sm bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-[#33404B] text-[22px] mb-3 font-semibold">
                Delete comment
              </h3>
              <p className="text-gray-500">
                Are you sure you want to delete this comment? This will remove
                the comment, and can't be undone
              </p>
              <div className="flex items-center justify-center w-full gap-3 mt-5">
                <button
                  onClick={onCancel}
                  className="uppercase bg-[#68717E] rounded-md text-white font-normal py-2 px-8 cursor-pointer"
                >
                  No, Cancel
                </button>
                <button
                  onClick={onDelete}
                  className="uppercase bg-[#ED6268] rounded-md text-white font-normal py-2 px-8 cursor-pointer"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteReply;