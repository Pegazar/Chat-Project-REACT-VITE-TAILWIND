import React, { useEffect, useState } from "react";
import { timeAgo } from "../utils/timeAgo";

const CommentTime = ({ createdAt, isReply }) => {
  const isTimestamp = typeof createdAt === "number";
  const [relativeTime, setRelativeTime] = useState(() => {
    if (isReply && isTimestamp) {
      return timeAgo(new Date(createdAt));
    }
    return createdAt;
  });

  useEffect(() => {
    if (!(isReply && isTimestamp)) return;

    const interval = setInterval(() => {
      setRelativeTime(timeAgo(new Date(createdAt)));
    }, 30000);

    return () => clearInterval(interval);
  }, [createdAt, isReply, isTimestamp]);

  return (
    <span className="text-[#85888C]">
      {relativeTime}
    </span>
  );
};

export default CommentTime;