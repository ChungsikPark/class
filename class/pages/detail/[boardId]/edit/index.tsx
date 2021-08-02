import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../src/commons/types/generated/types";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      createdAt
    }
  }
`;

export default function EditPage() {
  const router = useRouter();

  const { data } = useQuery<IQuery>(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const isEdit = true;

  return <BoardWrite isEdit={isEdit} data={data} />;
}
