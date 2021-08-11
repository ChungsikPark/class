import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.aaaId },
  });

  if (typeof window === "undefined") return <></>;

  return (
    <>
      작성자: <span>{data?.fetchBoard.writer}</span>
      <br />
      제목: <span>{data?.fetchBoard.title}</span>
      <br />
      내용:
      <span
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          // __html: data?.fetchBoard.contents,
        }}
      />
    </>
  );
}
