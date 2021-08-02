import axios from "axios";
import { useEffect, useState } from "react";

export default function UseEffectAxios2Page() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resultCount = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles/count"
      );
      setCount(resultCount.data);
      const resultList = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      setList(resultList.data);
    };
    getData();
  }, []);

  return (
    <>
      <div>데이터 받기 테스트</div>
      <hr />
      <div>총 {count}개</div>
      <hr />
      {list.map((data: any) => (
        <div key={data.id}>
          <div>제목: {data.title}</div>
          <div>요약: {data.summary}</div>
          <hr />
        </div>
      ))}
    </>
  );
}
