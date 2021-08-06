import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  // async는 가장 가까운 함수에 붙인다.
  const onClickDelete = (boardId: String) => async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: boardId,
        },
        // refetchQueries: [{ query: FETCH_BOARDS }],
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                const newPrev = prev.filter((prevData) => {
                  return prevData.__ref !== `Board:${data.deleteBoard}`;
                });
                return [...newPrev];
              },
            },
          });
        },
      });
    } catch (error) {}
  };

  return (
    <>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <span style={{ padding: "30px" }}>{data.writer}</span>
          <span style={{ padding: "30px" }}>{data.title}</span>
          <span style={{ padding: "30px" }}>{data.contents}</span>
          <button onClick={onClickDelete(data._id)}>DELETE</button>
        </div>
      ))}
    </>
  );
}
