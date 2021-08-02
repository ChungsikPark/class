import { useState, useEffect, useRef } from "react";

export default function ImagePreLoadPage() {
  const [image, setImage] = useState("");
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setImage(img); // img는 태그임 <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" />
    };
  }, []);

  const onClickButton = () => {
    divRef.current?.appendChild(image);
  };

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
    </>
  );
}
