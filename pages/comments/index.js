import { useState } from "react";

export default function CommentList() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const submitComments = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/comments", {
      method: "POST",
      // body: JSON.stringify({ comment: comment }),
      body: JSON.stringify({ comment }), // the 'comment' need to extract in api routes
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };

  const deleteComment = async (commentId) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    fetchComments();
  };

  return (
    <>
      <input
        className="text-black"
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        autoComplete="off"
      />
      <button onClick={submitComments}>Submit comments</button>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}
