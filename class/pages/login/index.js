import { useState } from "react"

export default function LoginPage() {
  const [id, setId] = useState("")
  const [pw, setPw] = useState("")
  const [errorId, setErrorId] = useState("")
  const [errorPw, setErrorPw] = useState("")

  const handleChangeId = (event) => {
    const value = event.target.value
    setId(value)
    value ? setErrorId("") : setErrorId("아이디를 입력해 주세요...!")
  }

  const handleChangePw = (event) => {
    const value = event.target.value
    setPw(value)
    value ? setErrorPw("") : setErrorPw("비밀번호를 입력해 주세요...!")
  }

  const handleClickLogin = () => {
    if (id === "") {
      setErrorId("아이디를 입력해 주세요...!")
    }
    if (pw === "") {
      setErrorPw("비밀번호를 입력해 주세요...!")
    }
    if (id !== "" && pw !== "") {
      alert("로그인을 해볼까요?!")
    } else if (id === "" && pw !== "") {
      alert("아이디를 입력해 주세요...!")
    } else if (id !== "" && pw === "") {
      alert("비밀번호를 입력해 주세요...!")
    } else {
      alert("아이디와 비밀번호를 입력해 주세요...!")
    }
  }

  return(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>로그인</h1>
      <div style={{fontSize: 6, fontWeight: 700}}>아이디</div>
      <input
        onChange={handleChangeId}
        type="text"
        placeholder="아이디를 입력하세요."
        style={{padding: "3px 33px 3px 3px", fontSize: 5}}
      />
      <div style={{color: 'red', fontSize: 4}}>{errorId}</div>
      <br/>
      <div style={{fontSize: 6, fontWeight: 700}}>비밀번호</div>
      <input
        onChange={handleChangePw}
        type="password"
        placeholder="비밀번호를 입력하세요."
        style={{padding: "3px 33px 3px 3px", fontSize: 5}}
      />
      <div style={{color: 'red', fontSize: 4}}>{errorPw}</div>
      <br/>
      <input
        onClick={handleClickLogin}
        type="button"
        value="로그인"
      />
    </div>
  )
}