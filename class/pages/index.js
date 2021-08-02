// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import {
  Wrapper,
  Title,
  Name,
  NameInput,
  Password,
  PasswordInput} from "../styles/Home.styles"

export default function Home() {
  return (
    <Wrapper>
      <Title>로그인</Title>
      <Name>아이디</Name>
      <NameInput type="text" placeholder="아이디를 입력하세요."/>
      <Password>비밀번호</Password>
      <PasswordInput type="password" placeholder="비밀번호를 입력하세요."/>
    </Wrapper>
  )
}
