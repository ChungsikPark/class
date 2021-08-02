import { MyDiv } from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <>
      <hr />
      <MyDiv>작성자: {props.data?.fetchBoard.writer}님</MyDiv>
      <hr />
      <MyDiv>제목: {props.data?.fetchBoard.title}</MyDiv>
      <hr />
      <MyDiv>내용: {props.data?.fetchBoard.contents}</MyDiv>
      <hr />
      <button onClick={props.onClickEdit}>게시물 수정하기</button>
    </>
  );
}
