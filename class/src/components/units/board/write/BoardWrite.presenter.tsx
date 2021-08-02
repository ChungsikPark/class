import { MyInput, MyButton } from "./BoardWrite.styles"
import { IBoardWriteUIProps } from "./BoardWrite.types"

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return(
    <>
      <hr />
      작성자: <MyInput type='text' onChange={props.onChangeInput} name='writer' defaultValue={props.data?.fetchBoard.writer} readOnly={props.data} />
      <hr />
      비밀번호: <MyInput type='password' onChange={props.onChangeInput} name='password'/>
      <hr />
      제목: <MyInput type='text' onChange={props.onChangeInput} name='title' defaultValue={props.data?.fetchBoard.title}/>
      <hr />
      내용: <MyInput type='text' onChange={props.onChangeInput} name='contents' defaultValue={props.data?.fetchBoard.contents}/>
      <hr />
      {/* {!props.isEdit && <MyButton disabled={props.btnActive} active={props.btnActive} onClick={props.onClickSubmit}>게시물 등록하기</MyButton>}
      {props.isEdit && <MyButton disabled={props.btnActive} active={props.btnActive} onClick={props.onClickEdit}>게시물 수정하기</MyButton>} */}
      {!props.isEdit && <MyButton active={props.btnActive} onClick={props.onClickSubmit}>게시물 등록하기</MyButton>}
      {props.isEdit && <MyButton active={props.btnActive} onClick={props.onClickEdit}>게시물 수정하기</MyButton>}
    </>
  )
}
