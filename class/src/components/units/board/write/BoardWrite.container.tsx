import { useState, ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queris";
import { IBoardWriteProps, INewInputs } from "./BoardWrite.types";
import BoardWriteUI from "./BoardWrite.presenter";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";

const init = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();
  const [inputs, setInputs] = useState(init);
  const [btnActive, setBtnActive] = useState(true);
  const [createBoard] = useMutation<IMutation, IMutationCreateBoardArgs>(
    CREATE_BOARD
  );
  const [updateBoard] = useMutation<IMutation, IMutationUpdateBoardArgs>(
    UPDATE_BOARD
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    setInputs(newInputs);
    if (Object.values(newInputs).every((data) => data)) setBtnActive(false);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: { ...inputs },
        },
      });
      alert(`${result.data?.createBoard._id}로 게시글 생성 완료!!!!!`);
      router.push(`/detail/${result.data?.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickEdit = async () => {
    const newInputs: INewInputs = {};
    if (inputs.title) newInputs.title = inputs.title;
    if (inputs.contents) newInputs.contents = inputs.contents;
    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          password: inputs.password,
          updateBoardInput: { ...newInputs },
        },
      });
      alert(`${result.data?.updateBoard._id} 게시글 수정 완료!!!!!`);
      router.push(`/detail/${result.data?.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      onChangeInput={onChangeInput}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      btnActive={btnActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
