import React from "react";

export default function Article(props) {
  const { title, content, comments, status, author, likedBy } = props.data;

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
