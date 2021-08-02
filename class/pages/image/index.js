// 테스트용으로 간단간단하게 이용할 때는 위에 짤막하게 쓰기도 함
import styled from '@emotion/styled'

const MyImg = styled.img`
  width: 100px;
  height: 100px;
  position: relative;
`
const MyImg2 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  /* background-color: rgba(100, 200, 100, 0.3); */
  background-color: steelblue;
  opacity: 50%;
  border: 1px solid steelblue;
  border-radius: 50%;
  top: 0px;
  left: 0px;
`
const MyDiv = styled.div`
  width: 100px;
  height: 100px;
  /* background-color: steelblue; */
  background-image: url("/mypage/profile.png");
  background-size: 100%;
`

export default function ImagePage() {
  return (
    <>
      <MyImg src="/mypage/profile.png"/>
      <MyImg2 src="/mypage/plus.png"/>
      <MyDiv/>
      <div>이미지연습</div>
    </>
  )
}