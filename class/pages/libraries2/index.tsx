import { DatePicker, Rate } from "antd";
import ReactPlayer from "react-player";
import styled from "@emotion/styled";

function onChange(date, dateString) {
  console.log(date, dateString);
}

const onChangeStar = (value) => {
  console.log(value);
};

const Youtube = styled(ReactPlayer)`
  width: 100%;
  height: 100%;
  padding: 20px 40px;
`;

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function Libraries2Page() {
  return (
    <>
      <div>라이브러리2 페이지</div>
      <DatePicker onChange={onChange} />
      <Rate tooltips={desc} onChange={onChangeStar} />
      <Youtube
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        playing={true}
        muted={true}
      />
    </>
  );
}
