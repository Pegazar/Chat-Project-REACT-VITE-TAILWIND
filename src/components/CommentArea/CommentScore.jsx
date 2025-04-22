import React, { useState } from "react";

const CommentScore = ({ initialScore, onScoreChange }) => {
  const [count, setCount] = useState(initialScore);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onScoreChange(newCount);
  };

  const decrement = () => {
    const newCount = count > 0 ? count - 1 : 0;
    setCount(newCount);
    onScoreChange(newCount);
  };

  return (
    <div className="flex flex-row md:flex-col items-center justify-between bg-gray-100 rounded-lg px-4 py-2 md:px-2 md:py-1 text-sm font-semibold text-center flex-shrink-0 self-start w-[95px] md:w-[45px]">
      <button
        onClick={increment}
        className="text-[#C0C0E4] text-xl hover:text-[#5D5AA9] font-bold duration-200 cursor-pointer"
      >
        +
      </button>
      <span className="text-[#5D5AA9] text-[16px] px-2 md:py-2 font-semibold">
        {count}
      </span>
      <button
        onClick={decrement}
        className="text-[#C0C0E4] text-xl hover:text-[#5D5AA9] font-bold duration-200 cursor-pointer"
      >
        -
      </button>
    </div>
  );
};

export default CommentScore;