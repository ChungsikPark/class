import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { FETCH_BOARD } from './BoardDetail.queries'
import BoardDetailUI from './BoardDetail.presenter'

export default function BoardDetail () {
  const router = useRouter()
  const { data } = useQuery(
    FETCH_BOARD,
    { variables: { boardId: router.query.boardId } }
  )

  // const { data: dataBoard } = useQuery(
  //   FETCH_BOARD,
  //   { variables: { boardId: router.query.boardId } }
  // )

  // const { data: dataBoardComments } = useQuery(
  //   FETCH_BOARD_COMMENTS,
  //   {variables: {boardId: router.query.boardId}}
  // )
  const onClickEdit = () => {
    router.push(`/detail/${router.query.boardId}/edit`)
  }
  return (
    <BoardDetailUI data={data} onClickEdit={onClickEdit}/>
    // <BoardDetailUI dataBoard={dataBoard} onClickEdit={onClickEdit} dataBoardComments={dataBoardComments}/>
  )
}
