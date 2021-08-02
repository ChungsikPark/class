import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

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
  const { data, refetch } = useQuery(FETCH_BOARD, { variables: { aaa: 1 } });

  const onClickPage = (event) => {
    refetch({ aaa: Number(event.target.id) });
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
          <Page id={data} key={data} onClick={onClickPage}>
            {data}
          </Page>
        ))}
      </div>
    </>
  );
}
