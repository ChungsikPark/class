import styled from "@emotion/styled";

const Input = styled.input`
  border-color: lightgreen;
  background-color: lightyellow;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 11px;
`;

export default function Input01(props) {
  return (
    <>
      {props.inputName}:
      <Input type={props.type} {...props.register} />
      <ErrorMessage>{props.errorMessage}</ErrorMessage>
    </>
  );
}
