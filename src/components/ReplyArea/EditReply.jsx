import React, { useState } from "react";
import TextareaWithSubmit from "./TextAreaWihtSubmit";

const EditReply = ({ initialContent, onSave }) => {
  const [editedContent, setEditedContent] = useState(initialContent);

  const handleSave = () => {
    onSave(editedContent);
  };

  return (
    <div className="mt-2">
      <TextareaWithSubmit
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
        onSubmit={handleSave}
        rows={4}
        autoFocus={true}
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
