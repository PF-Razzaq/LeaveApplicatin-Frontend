import React, { useEffect, useRef } from "react";

const ParentCompotent = () => {
  const messages = [
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
    "I love pakista",
  ];
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
export default ParentCompotent;
