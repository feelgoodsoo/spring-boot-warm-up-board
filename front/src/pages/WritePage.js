import React, { useState } from "react";
import axios from "axios";

export default function WritePage() {
  const [idNum, setIdNum] = useState(0);
  const [postTitle, setPostTitle] = useState("");
  const [postContext, setPostContext] = useState("");

  const sendData = async () => {
    const authInfo = {
      auth: {
        Username: "user",
        Password: "cb8420be-1da7-4490-ac43-5a6c8055080a", // Bad password
      },
    };

    const params = {
      id: `${idNum}`,
      title: `${postTitle}`,
      content: `${postContext}`,
    };

    try {
      await axios({
        method: "post",
        url: "http://localhost:5050/board/write",
        data: params,
      }).then((res) => console.log(res));
    } catch (e) {
      console.error("error reason: ", e);
    }
  };

  const handleSubmit = (e) => {
    sendData();
    console.log("postTitle: ", postTitle);
    console.log("postContent: ", postContext);

    e.preventDefault();
    //console.log({ email, password });
    setPostTitle("");
    setPostContext("");

    const idNumUpper = idNum + 1;
    console.log("idNumUpper : " + idNumUpper);
    setIdNum(idNumUpper);
  };

  return (
    <div>
      <input
        type="text"
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      ></input>
      <textarea
        value={postContext}
        onChange={(e) => setPostContext(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>작성</button>
    </div>
  );
}
