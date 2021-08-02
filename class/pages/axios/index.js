import axios from "axios";
import { useState } from "react";
import { Wrapper } from "../../styles/axios/AxiosPage.styles";

export default function AxiosPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState("");
  const randomNumber = String(Math.floor(Math.random() * 200) + 1);
  // const preId = id === 1 ? id : id-1
  // const nextId = id === 200 ? id : id+1

  // normal function style
  // async function onClickData(){
  //   const sample = await axios.get("https://koreanjson.com/posts/5")
  //   setTitle(sample.data.title)
  //   setContent(sample.data.content)
  // }

  // 지정한 순서의 게시물 출력
  // const onClickData = async() => {
  //   const sample = await axios.get("https://koreanjson.com/posts/7")
  //   setTitle(sample.data.title)
  //   setContent(sample.data.content)
  // }

  // 전체 게시물 목록 출력 (총 200개)
  // const onClickData = async() => {
  //   const sample = await axios.get("https://koreanjson.com/posts")
  //   console.log(sample.data)
  // }

  // 전체 목록에서 선택한 게시물 출력 (index: 0~199)
  // const onClickData = async() => {
  //   const sample = await axios.get("https://koreanjson.com/posts")
  //     setTitle(sample.data[199].title)
  //     setContent(sample.data[199].content)
  // }

  // 1~200번째 게사물 사이에서 랜덤 출력
  const onClickData = async () => {
    const sample = await axios.get(
      `https://koreanjson.com/posts/${randomNumber}`
    );
    setTitle(sample.data.title);
    setContent(sample.data.content);
    setId(sample.data.id);
  };

  // 이전 순서 게시물 출력 (첫번쩨 게시물에서는 알림창 팝업)
  const onClickPreData = async () => {
    const sample = await axios.get(`https://koreanjson.com/posts/${id - 1}`);
    if (id > 1) {
      setId(sample.data.id);
      setTitle(sample.data.title);
      setContent(sample.data.content);
    } else {
      alert("첫번째 게시물입니다.");
    }
  };

  // 디음 순서 게시물 출력 (마지막 게시물에서는 첫번째 게시물로 이동)
  const onClickNextData = async () => {
    if (id === 200) {
      const sample = await axios.get(`https://koreanjson.com/posts/1`);
      setId(sample.data.id);
      setTitle(sample.data.title);
      setContent(sample.data.content);
    } else {
      const sample = await axios.get(`https://koreanjson.com/posts/${id + 1}`);
      setId(sample.data.id);
      setTitle(sample.data.title);
      setContent(sample.data.content);
    }
  };

  // 데이터 삭제
  const onClickResetData = () => {
    setId("");
    setTitle("");
    setContent("");
  };

  return (
    <Wrapper>
      <hr />
      <input
        type="text"
        style={{ margin: "0px 5px", backgroundColor: "#DCE1E3" }}
      ></input>
      <button
        onClick={onClickData}
        style={{ margin: "0px 5px", backgroundColor: "#DCE1E3" }}
      >
        해당 아이디 게시물
      </button>
      <button
        onClick={onClickData}
        style={{ margin: "0px 5px", backgroundColor: "#DCE1E3" }}
      >
        랜덤 게시물
      </button>
      <button
        onClick={onClickResetData}
        style={{ margin: "0px 5px", backgroundColor: "#DCE1E3" }}
      >
        게시물 초기화
      </button>
      <hr />
      <div>아이디: </div>
      <br />
      <div>{id}</div>
      <hr />
      <div>제목: </div>
      <br />
      <div>{title}</div>
      <hr />
      <div>내용: </div>
      <br />
      <div>{content}</div>
      <hr />
      <button
        onClick={onClickPreData}
        style={{ margin: "0px 5px", backgroundColor: "#DCE1E3" }}
      >
        이전 게시물
      </button>
      <button
        onClick={onClickNextData}
        style={{ margin: "0px 5px", backgroundColor: "#DCE1E3" }}
      >
        다음 게시물
      </button>
    </Wrapper>
  );
}
