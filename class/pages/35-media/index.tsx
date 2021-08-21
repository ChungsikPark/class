import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

const Box = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: green;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: blue;
  }
`;

const MediaPage = () => {
  return (
    <>
      <Box>상자</Box>
    </>
  );
};

export default MediaPage;
