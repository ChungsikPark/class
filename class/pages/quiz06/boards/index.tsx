import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function Quiz6BoardPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickShoppingBag1 = (shoppingBagData) => () => {
    const shoppingBag = JSON.parse(localStorage.getItem("shoppingBag") || "[]");
    let isExists = false;
    shoppingBag.forEach((data) => {
      if (data._id === shoppingBagData._id) isExists = true;
    });
    if (isExists) return;
    shoppingBag.push(shoppingBagData);
    localStorage.setItem("shoppingBag", JSON.stringify(shoppingBag));
  };

  const onClickShoppingBag2 = (shoppingBagData) => () => {
    const shoppingBag = JSON.parse(localStorage.getItem("shoppingBag") || "[]");
    const isExists = shoppingBag.filter(
      (data) => data._id !== shoppingBagData._id
    );
    shoppingBag.push(shoppingBagData);
    localStorage.setItem("shoppingBag", JSON.stringify(isExists));
  };

  return (
    <>
      {data?.fetchBoards.map((data, index) => (
        <div key={data._id}>
          <span>{index + 1}</span>
          <span>{data.writer}</span>
          <span>{data.title}</span>
          <button onClick={onClickShoppingBag1(data)}>게시물담기</button>
          <button onClick={onClickShoppingBag2(data)}>담기취소</button>
        </div>
      ))}
    </>
  );
}
