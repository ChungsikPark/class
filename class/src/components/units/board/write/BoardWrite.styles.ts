import styled from "@emotion/styled"

export const MyInput = styled.input``

interface IProps {
  active: boolean;
}

export const MyButton = styled.button`
  color: ${(props: IProps) => props.active ? 'whitemusk' : 'steelblue'}
`