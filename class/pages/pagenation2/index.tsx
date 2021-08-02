import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARD = gql`
  query fetchBoards($aaa: Int) {
    fetchBoards(page: $aaa) {
      _id
      writer
      title
    }
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
  const { data, refetch } = useQuery(FETCH_BOARD, {
    variables: { aaa: startPage },
  });

  const onClickPage = (event) => {
    refetch({ aaa: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 10);
  };

  const onClickNextPage = () => {
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
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data, index) => (
          <Page
            id={startPage + index}
            key={startPage + index}
            onClick={onClickPage}
          >
            {startPage + index}
          </Page>
        ))}
        <Page onClick={onClickNextPage}>다음</Page>
      </div>
    </>
  );
}
