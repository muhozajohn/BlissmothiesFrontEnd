import React from "react";

const Welcome = ({ id,content, number, title }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-slate-400 text-center px-2 py-2">
      <h4>{number}</h4>
      <p>{content}</p>
      <p>{title}</p>
    </div>
  );
};

export default Welcome;
