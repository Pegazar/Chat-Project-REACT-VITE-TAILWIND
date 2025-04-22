import React from "react";

const TextareaWithSubmit = ({
  value,
  onChange,
  onSubmit,
  rows = 3,
  placeholder = "",
  autoFocus = false,
  className = ""
}) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <textarea
      className={`w-full px-4 py-2 rounded-lg outline-none resize-none border text-[#1a1b3a] border-[#5357B6] font-normal ${className}`}
      value={value}
      rows={rows}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  );
};

export default TextareaWithSubmit;