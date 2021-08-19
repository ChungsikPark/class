import { useMemo, useCallback, useState } from "react";

import Presenter from "./presenter";

const Container = () => {
  console.log("컨테이너(부모)가 렌더링 시작됩니다.");
  let countLet = 0;
  const [countState, setCountState] = useState(0);
  // const randomNumber = useMemo(() => Math.random(), []);
  // console.log(randomNumber); // useMemo()는 복잡한 계산할 때, 결과 저장 용도이다. 보통 잘 안쓴다.

  // const aaa = useMemo(() => {
  //   return () => {
  //     console.log("let 클릭!!!");
  //     console.log(countLet + 1);
  //     countLet = countLet + 1;
  //   };
  // }, []); // 함수를 useCallback 대신에 useMemo를 사용할 수 있으나, 이렇게 사용하진 않는다.

  const onClickCountLet = useCallback(() => {
    console.log("let 클릭!!!");
    console.log(countLet + 1);
    countLet = countLet + 1;
  }, []);

  const onClickCountState = useCallback(() => {
    console.log("state 클릭!!!");
    // console.log(countState + 1); // state 값을 같이 기억하기 때문에, 값이 변하지 않을 뿐더라 렌더링 또한 되지 않는다. 주의한다. 그러므로 prev 방식을 사용하면 해결된다.
    setCountState((prev) => prev + 1);
  }, []); // useCallback()은 의존성 배열에 데이터가 적을 때 사용할 것, 함수 내부가 크게 복잡하지 않을 때 사용할 것
  return (
    <>
      <div>=====================컨테이너=====================</div>
      <div>countLet: {countLet}</div>
      <button onClick={onClickCountLet}>countLet + 1</button>
      <br />
      <br />
      <div>countState: {countState}</div>
      <button onClick={onClickCountState}>countState + 1</button>
      <div>================================================</div>
      <Presenter countLet={countLet} />
    </>
  );
};

export default Container;
