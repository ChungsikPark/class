import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const OptimisticUIPage = () => {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "611ce2362d1aa300298e6cb0" },
  });
  const onClickLike = (likeCount: number) => async () => {
    await likeBoard({
      variables: { boardId: "611ce2362d1aa300298e6cb0" },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "611ce2362d1aa300298e6cb0" },
      //   },
      // ],
      optimisticResponse: {
        likeBoard: likeCount + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "611ce2362d1aa300298e6cb0" },
          data: {
            fetchBoard: {
              _id: "611ce2362d1aa300298e6cb0",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>좋아요: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike(data?.fetchBoard.likeCount)}>
        좋아요 + 1
      </button>
    </>
  );
};

export default OptimisticUIPage;
