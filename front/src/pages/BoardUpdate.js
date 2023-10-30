import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function BoardUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [board, setBoard] = useState({
    id: 0,
    title: "",
    created_by: "",
    content: "",
  });

  const getBoard = async () => {
    const respData = await axios({
      method: "get",
      url: `http://localhost:5050/board/${id}`,
    });
    setBoard(respData.data);
  };

  const updateBoard = async () => {
    const respData = await axios({
      method: "post",
      url: `http://localhost:5050/board/write`,
      data: board,
    });
    console.log(respData);
    alert("수정되었다!");
    navigate(`/board/${id}`);
  };

  const backToDetail = () => {
    navigate(`/board/${id}`);
  };

  useEffect(() => {
    getBoard();
  }, []);

  const { title, created_by, content } = board;

  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <br />
      <div>
        <span>내용</span>
        <textarea
          name="content"
          cols="30"
          rows="10"
          value={content}
          onChange={onChange}
        ></textarea>
      </div>
      <br />
      <button onClick={updateBoard}>수정</button>
      <button onClick={backToDetail}>취소</button>
    </div>
  );
}

export default BoardUpdate;
