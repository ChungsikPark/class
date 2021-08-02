import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($aaa: Upload!) {
    uploadFile(file: $aaa) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPage() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const fileRef = useRef<HTMLInputElement>(null);
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file?.size) {
      alert("파일 사이즈가 없습니다");
      return;
    }
    if (file?.size > 5 * 1024 * 1024) {
      alert("파일 사이즈가 너무 큽니다(제한: 5MB)");
      return;
    }
    if (!file.type.includes("png") && !file.type.includes("jpeg")) {
      alert("png 또는 jpeg 파일만 업로드 가능합니다");
      return;
    }
    try {
      const result = await uploadFile({
        variables: {
          aaa: file,
        },
      });
      setImageUrl(result.data.uploadFile.url);
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickGreyBox = () => {
    fileRef.current?.click();
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents,
            images: [imageUrl],
          },
        },
      });
      console.log(result.data.createBoard._id);
      alert("게시물이 등록되었습니다");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <button onClick={onClickSubmit}>게시물 등록하기</button>
      <br />
      <input type="text" onChange={onChangeWriter} name="writer" />
      <br />
      <input type="password" onChange={onChangePassword} name="password" />
      <br />
      <input type="text" onChange={onChangeTitle} name="title" />
      <br />
      <input type="text" onChange={onChangeContents} name="contents" />
      <br />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "grey" }}
        onClick={onClickGreyBox}
      ></div>
      <input
        ref={fileRef}
        type="file"
        onChange={onChangeFile}
        style={{ display: "none" }}
      />
    </>
  );
}
