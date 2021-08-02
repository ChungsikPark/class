import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function LifecycleFunctionPage() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("안녕!");
    inputRef.current?.focus();
    return () => {
      alert("잘가!");
    };
  }, []);

  useEffect(() => {
    console.log("반가워!");
  }, []);

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <input type="password" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickCount}>더하기 1</button>
      <div>이것은 함수 컴포넌트 입니다.</div>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
