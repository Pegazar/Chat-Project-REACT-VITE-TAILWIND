import React, { useState } from "react";

const EditReply = ({
  initialContent,
  onSave,
}) => {
  const [editedContent, setEditedContent] = useState(initialContent);

  const handleSave = () => {
    onSave(editedContent);
  };

  return (
    <div className="mt-2">
      <textarea
        className="w-full px-4 py-2 rounded-lg outline-none resize-none border text-[#1a1b3a] border-[#5357B6] font-normal"
        value={editedContent}
        rows={4}
        onChange={(e) => setEditedContent(e.target.value)}
      />
      <div className="flex justify-end mt-2">
        <button
          className="bg-[#5357B6] hover:bg-[#C9C9E6] text-white font-semibold px-6 py-2 rounded-lg uppercase cursor-pointer duration-300"
          onClick={handleSave}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditReply;