import React from "react";

export default function Board({ id, title, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{content}</h2>
    </div>
  );
}
