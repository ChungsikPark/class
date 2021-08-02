import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { IQuery } from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoards($aaa: Int) {
    fetchBoards(page: $aaa) {
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
    variables: { aaa: startPage },
  });
  const { data: bbb } = useQuery<IQuery>(FETCH_BOARD_COUNT); // bbb로 이름을 붙여서 사용, usequery에서는 data로 주는데 그걸 이름이 같아버리니.....
  const lastPage = Math.ceil(Number(bbb?.fetchBoardsCount) / 10);

  const onClickPage = (event) => {
    refetch({ aaa: Number(event.target.id) });
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
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (data, index) =>
            startPage + index <= lastPage && (
              <Page
                id={startPage + index}
                key={startPage + index}
                onClick={onClickPage}
              >
                {startPage + index}
              </Page>
            )
        )}
        <Page onClick={onClickNextPage}>다음</Page>
      </div>
    </>
  );
}
