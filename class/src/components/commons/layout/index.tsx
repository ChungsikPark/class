import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

const Body = styled.div`
  height: 500px;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 20px;
`;

export default function Layout(props: any) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Wrapper>
        {/* <div style={{ backgroundColor: "#a2cce4" }}>사이드바 영역</div> */}
        <Body>{props.children}</Body>
      </Wrapper>
      <LayoutFooter />
    </>
  );
}
