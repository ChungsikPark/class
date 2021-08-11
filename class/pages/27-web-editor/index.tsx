import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();
  const { register, handleSubmit, setValue, trigger } = useForm();
  const [createBoard] = useMutation(CREATE_BOARD);

  const onclickBtn = async (data) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`/27-web-editor-detail/${result.data.createBoard._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onChangeContents = (value) => {
    const isBlank = "<p><br></p>"; // 빈 값일 때 남는 태그들... 해결해주기 위함
    setValue("contents", value === isBlank ? "" : value);
    trigger("contents"); // 이벤트가 먹히게 끔 위함
  };

  return (
    <form onSubmit={handleSubmit(onclickBtn)}>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호:
      <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      {/* 내용: <textarea {...register("contents")} /> */}
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button type="submit">게시물 등록하기</button>
    </form>
  );
}
