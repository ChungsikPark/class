import styled from "@emotion/styled";

const MyButton = styled.button`
  background-color: ${(props) => (props.isActive ? "aqua" : "")};
`;

export default function Button01(props) {
  return (
    <MyButton type={props.type} isActive={props.isActive}>
      {props.buttonName}
    </MyButton>
  );
}
