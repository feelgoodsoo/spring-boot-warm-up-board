import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const respData = await axios({
        method: "get",
        url: "http://localhost:5050/board/list",
      });
      console.log(respData);
      setData(respData.data);
    } catch (e) {
      console.error("error reason: ", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>start</h1>
      <ol>
        {data.map((board) => (
          <li key={board.id}>
            <Link to={`/board/${board.id}`}>{board.title}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}
