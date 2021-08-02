import { YoutubeOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const YoutubeIcon = styled(YoutubeOutlined)`
  color: steelblue;
  font-size: 50px;
`;

const onClickIcon = (event) => {
  console.log(event.target.id);
};

export default function LibraryPage() {
  return (
    <>
      <div>라이브러리 페이지</div>
      <YoutubeIcon id="1234" onClick={onClickIcon} />
    </>
  );
}
