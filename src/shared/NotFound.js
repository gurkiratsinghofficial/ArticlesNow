import React from "react";
import { FcQuestions } from "react-icons/fc";

function NotFound(props) {
  return (
    <div className="not-found">
      <FcQuestions />
      <strong>404 Not found</strong>
    </div>
  );
}

export default NotFound;
