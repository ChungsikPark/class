import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARD_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Column = styled.span`
  margin: 0 50px;
`;

const Page = styled.span`
  margin: 0 10px;
  cursor: pointer;
`;

export default function PagenationPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<IQuery>(FETCH_BOARD, {
    variables: { page: startPage },
  });
  const { data: dataBoardCount } = useQuery<IQuery>(FETCH_BOARD_COUNT); // bbb로 이름을 붙여서 사용, usequery에서는 data로 주는데 그걸 이름이 같아버리니.....
  const lastPage = Math.ceil(Number(dataBoardCount?.fetchBoardsCount) / 10);

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ page: Number((event.target as Element).id) });
  };

  const onClickPrevPage = () => {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  };

  return (
    <>
      <div>
        {data?.fetchBoards.map((data) => (
          <div key={data._id}>
            <Column>{data.writer}</Column>
            <Column>{data.title}</Column>
          </div>
        ))}
        <Page onClick={onClickPrevPage}>이전</Page>
        {new Array(10).fill(1).map(
          // 빈 배열 만들기는 new Array 내용물은 fill 로 채우기
          (
            _, // 안쓰는데이터 _로 놓기
            index
          ) => {
            const currentPage = startPage + index; // 변수로 선언해서 쓰기
            return (
              currentPage <= lastPage && (
                <Page
                  id={String(currentPage)} // 태그에는 string 형태나 넣을 수 있다
                  key={currentPage}
                  onClick={onClickPage}
                >
                  {currentPage}
                </Page>
              )
            );
          }
        )}
        <Page onClick={onClickNextPage}>다음</Page>
      </div>
    </>
  );
}
