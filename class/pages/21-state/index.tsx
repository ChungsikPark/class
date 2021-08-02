import { useState } from "react";

export default function StatePage() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    // setCount((prev) => prev + 1);
    setCount((ohohoh) => ohohoh + 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCount}>+1</button>
    </>
  );
}
