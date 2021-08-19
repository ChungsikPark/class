import { memo } from "react";

const Presenter = () => {
  console.log("프리젠터(자식)가 렌더링 시작됩니다.");
  return (
    <>
      <div>=====================프리젠터=====================</div>
      <div>================================================</div>
    </>
  );
};

export default memo(Presenter);

// 자식에서 사용을 하던 안하던 부모에서 무언가를 보내주고 있으면, memo를 적용해도 memo를 뚫어내고 렌더링이 된다.
// 하지만 보내준다는 무언가는 state 값이고, 단순 변수의 경우 memo를 뚫지 못한다.
//
