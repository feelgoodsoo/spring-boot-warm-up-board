import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const handleButton = async () => {
    console.log("hit me up");
    //   axios({

    //   })
  };

  const handleRegisteration = async () => {
    console.log("handle registeration");
  };

  return (
    <>
      <h1>login</h1>
      <div>
        <label>Id: </label>
        <input type="id" value={id} onChange={handleId}></input>
      </div>
      <br />
      <div>
        <label>Password: </label>
        <input type="pw" value={pw} onChange={handlePw}></input>
      </div>
      <br />
      <div>
        <button type="button" onClick={handleButton}>
          로그인
        </button>
      </div>
      <br />
      <button type="button" onClick={handleRegisteration}>
        회원가입
      </button>
    </>
  );
}
