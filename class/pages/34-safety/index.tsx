import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import * as Sentry from "@sentry/nextjs";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const INPUTS_INIT = {
  writer: "",
  password: "",
  title: "",
  contents: "",
};

const SafetyPage = () => {
  // const {handleSubmit, formState} = useForm()

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const [createBoard] = useMutation<IMutation, IMutationCreateBoardArgs>(
    CREATE_BOARD
  );

  const onChangeInput = (key) => (event) => {
    setInputs((prev) => ({
      ...prev,
      [key]: event?.target.value,
    }));
  };

  const onClickSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await createBoard({
        variables: { createBoardInput: { ...inputs } },
      });
      throw new Error("강제로 에러 발생시키기!!!");
      console.log(result);
      setIsSubmitting(false);
    } catch (error) {
      Sentry.captureException(error);
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <div>
        작성자: <input type="text" onChange={onChangeInput("writer")} />
      </div>
      <div>
        비밀번호: <input type="password" onChange={onChangeInput("password")} />
      </div>
      <div>
        제목: <input type="text" onChange={onChangeInput("title")} />
      </div>
      <div>
        내용: <input type="text" onChange={onChangeInput("contents")} />
      </div>
      {/* <button disabled={forState.isSubmitting} onClick={onClickSubmit}>
        등록하기
      </button> */}
      <button disabled={isSubmitting} onClick={onClickSubmit}>
        등록하기
      </button>
    </>
  );
};

export default SafetyPage;
