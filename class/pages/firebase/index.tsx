import { ChangeEvent, useState } from "react";
import firebase from "firebase/app";

export default function FirebasePage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  const onClickSubmit = () => {
    firebase.firestore().collection("blog").add({
      writer: writer,
      title: title,
      contents: contents,
    });
  };

  const onClickFetch = async () => {
    const result = await firebase.firestore().collection("blog").get();
    result.forEach((doc) => console.log(doc.data()));
  };

  return (
    <>
      작성자: <input onChange={onChangeWriter} type="text" />
      제목: <input onChange={onChangeTitle} type="text" />
      내용: <input onChange={onChangeContents} type="text" />
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
