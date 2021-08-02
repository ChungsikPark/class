import { css } from "@emotion/react";
export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    /* font-family: "aaa"; */
    font-size: 20px;
  }

  @font-face {
    font-family: "aaa"; // 이 이름으로 쓰겠다
    src: url("/fonts/scifibit.ttf");
  }
`;
