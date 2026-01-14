import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  const [comments, setComments] = useState([
    { username: "@sg", remarks: "Well Done", rating: 4 },
  ]);

  const addNewComment = (comment) => {
    setComments((prev) => [...prev, comment]);
  };

  return (
    <div className="comment-section">
      <h3>All Comments</h3>

      {comments.map((c, idx) => (
        <div className="comment" key={idx}>
          <p><b>Remarks:</b> {c.remarks}</p>
          <p><b>Rating:</b> {c.rating}</p>
          <p><b>By:</b> {c.username}</p>
        </div>
      ))}

      <hr />

      <CommentsForm addNewComment={addNewComment} />
    </div>
  );
}
