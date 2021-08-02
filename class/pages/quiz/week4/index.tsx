import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Week4Page() {
  // 1번 문제
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  // 5번, 7번 문제
  useEffect(() => {
    alert("Rendered!!");
    return () => {
      alert("Bye!!");
    };
  }, []);

  // 6번 문제
  useEffect(() => {
    if (isChange) {
      alert("Changed!!");
    }
  }, [isChange]);

  // 3번 문제
  const onClickConvert = () => {
    setIsChange(true);
  };

  // 4번 문제
  const onClickRoute = () => {
    router.push("/");
  };

  return (
    <>
      <div>
        {/* 2번 문제 */}
        <button onClick={onClickConvert}>변경</button>
        <button onClick={onClickRoute}>이동</button>
      </div>
    </>
  );
}
