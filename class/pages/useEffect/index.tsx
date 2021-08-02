import { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  console.log("시작합니다");

  useEffect(() => {
    // console.log("그려진 뒤 입니다");
    console.log("업데이트완료");
  }, []);

  // 주의사항1 : state가 변경되면 화면이 변경(rendering)되는데, useEffet 안에서 setstate를 하면 한번더 화면이 변경(rendering)된다
  // useEffect(() => {
  //   setCount(1);
  // }, []);

  // 주의사항2: useEffct 인에 setState를 사용하면서, 의존성 배열 부분에 state 값이 들어가게 되면 무한루프가 돌아간다
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  console.log("그리기 직전");

  return (
    <>
      <div>컴포넌트예요</div>
      <div>카운트: {count}</div>
      <button onClick={onClickCount}>카운트 +1</button>
    </>
  );
}
