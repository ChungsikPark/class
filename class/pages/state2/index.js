import { useState } from "react";

export default function State2Page() {
  
  const [count, setCount] = useState(0)
  const onClickCount = () => {
    setCount(count+1)
  }

  // let count = 0;
  // const onClickCount = () => {
  //   document.getElementById("count").innerText = count
  //   count += 1;
  //   console.log(count)
  // }
  return(
    <>
      <div id="count">{count}</div>
      <button onClick={onClickCount}>count</button>
    </>
  )
}