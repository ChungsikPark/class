import { Rate, DatePicker, Modal } from "antd";
import ReactPlayer from "react-player";
import DaumPostcode from "react-daum-postcode";

import { useState } from "react";
import styled from "@emotion/styled";

const rates = ["1점", "2점", "3점", "4점", "5점"];

export default function Week3Page() {
  const [rate, setRate] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState(false);
  const [state, setState] = useState(0);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [zonecode, setZonecode] = useState("");
  const [address, setAddress] = useState("");

  const onChangeStar = (value: number) => {
    alert(rates[value - 1]);
    setRate(rates[value - 1]);
  };

  const onChageDatePicker = (date, dateString) => {
    console.log(date, dateString);
    setDate(dateString);
  };

  const onClickStar = () => {
    color ? setColor(false) : setColor(true);
  };

  const sumAll = () => {
    setState((prev) => state + 1);
    setState((prev) => state + 2);
    setState((prev) => state + 3);
    setState((prev) => state + 4);
  };

  const Wrapper = styled.div`
    padding: 50px;
  `;

  // const Star = styled.img``;

  const onCompleteAddress1 = () => {};

  const onClickOpenModal1 = () => {
    setIsOpen1(true);
  };

  const onClickCloseModal1 = () => {
    setIsOpen1(false);
  };

  const onClickOpenModal2 = () => {
    setIsOpen2(true);
  };

  const onClickCloseModal2 = () => {
    setIsOpen2(false);
  };

  const onCompleteAddress2 = (data) => {
    setAddress(data.address);
    setZonecode(data.zonecode);
    setIsOpen2(false);
  };

  return (
    <Wrapper>
      <Rate onChange={onChangeStar} />
      <div>{rate}</div>
      <br />
      <DatePicker onChange={onChageDatePicker} />
      <div>{date}</div>
      <br />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="800px"
        height="600px"
        muted={true}
        playing={true}
        controls={true}
      />
      <br />
      <div>
        <img onFocus={onClickStar} src="/ic_star-24px_gray.svg"></img>
        <img onClick={onClickStar} src="/ic_star-24px_blue.svg"></img>
      </div>
      <br />
      <div>결과는: {state}</div>
      <button onClick={sumAll}>실행</button>
      <br />
      <br />
      <DaumPostcode onComplete={onCompleteAddress1} autoClose />
      <br />
      <Modal
        visible={isOpen1}
        title="게시글 등록"
        onOk={onClickCloseModal1}
        onCancel={onClickCloseModal1}
      >
        <div>게시글이 등록되었습니다.</div>
      </Modal>
      <button onClick={onClickOpenModal1}>모달열기 2-2</button>
      <br />
      <br />
      <Modal
        visible={isOpen2}
        title="주소검색"
        onOk={onClickCloseModal2}
        onCancel={onClickCloseModal2}
      >
        <DaumPostcode onComplete={onCompleteAddress2} autoClose />
      </Modal>
      <button onClick={onClickOpenModal2}>모달열기 2-3</button>
      <br />
      <br />
      <div> 우편번호: {zonecode}</div>
      <div>주소: {address}</div>
    </Wrapper>
  );
}
