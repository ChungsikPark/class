import { useState } from "react"

export default function StatePage() {

  const [count, setCount] = useState(0)
  const [greet, setGreet] = useState("Hello!")
  const [sign, setSign] = useState("Sign in")
  const [token, setToken] = useState("000000")
  const [get, setGet] = useState(false)
  const [refresh, setRefresh] = useState(true)
  // const [state, setState] = useState("initial value") <-- 포맷은 이러함
  // "setCount", "setGreet" 처럼 굳이 "set뭐시기" 만들 필요도 없고 한글도 사용 가능, 위치가 중요할 뿐 !

  const handleCount = () => {
    setCount(count + 1)
  }

  const handleClick = () => {
    greet === "Hello!" ? setGreet("Welcome~") : setGreet("Hello!")
    sign === "Sign in" ? setSign("Sign out") : setSign("Sign in")
  }

  const getToken = () => {
    setToken(String(Math.floor(Math.random() * 1000000)).padStart(6, 0))
    setGet(true)
    setRefresh(false)
  }
  const refreshToken = () => {
    setToken("000000")
    setGet(false)
    setRefresh(true)
  }

  return(
    <>
      <div>{count}</div>
      <button onClick={handleCount}>Count</button>
      <br/><br/>
      <div>{greet}</div>
      <button onClick={handleClick}>{sign}</button>
      <br/><br/>
      <div>{token}</div>
      <button onClick={getToken} disabled={get}>Get</button>
      <button onClick={refreshToken} disabled={refresh}>Refresh</button>
    </>
  )
}