import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Board from "../components/Board";

export default function PostDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});
  const navigate = useNavigate();

  const getBoard = async () => {
    const respData = await axios({
      method: "get",
      url: `http://localhost:5050/board/${id}`,
    });
    setBoard(respData.data);
    setLoading(false);
  };

  useEffect(() => {
    getBoard();
  }, []);

  const deleteBoard = async () => {
    if (window.confirm("게시글 삭제할거야?")) {
      const respData = await axios({
        method: "get",
        url: "http://localhost:5050/board/delete",
      });
      console.log(respData);
      alert("삭제되었어!");
    }
  };

  const updateBoard = async () => {
    navigate("/update/" + id);
  };
  return (
    <>
      <h1>게시판 상세 보기</h1>
      <div>
        {loading ? (
          <h2>loading...</h2>
        ) : (
          <Board id={board.id} title={board.title} content={board.content} />
        )}
        <button onClick={updateBoard}>수정</button>
        <button onClick={deleteBoard}>삭제</button>
      </div>
    </>
  );
}
