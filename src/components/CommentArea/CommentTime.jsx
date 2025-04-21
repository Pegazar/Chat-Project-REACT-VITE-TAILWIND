import React, { useEffect, useState } from "react";
import { timeAgo } from "../utils/timeAgo";

const CommentTime = ({ createdAt }) => {
  const [relativeTime, setRelativeTime] = useState(() => {
    if (typeof createdAt === 'number') {
      return timeAgo(new Date(createdAt));
    }
    return createdAt;
  });

  useEffect(() => {
    if (typeof createdAt !== 'number') return;

    const interval = setInterval(() => {
      setRelativeTime(timeAgo(new Date(createdAt)));
    }, 60000);

    return () => clearInterval(interval);
  }, [createdAt]);

  return (
    <span className="text-[#85888C]">
      {relativeTime}
    </span>
  );
};

export default CommentTime;