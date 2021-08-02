import { useQuery, gql, useMutation} from '@apollo/client'
import styled from '@emotion/styled'
import { getDate } from '../../src/commons/libraries/utils'

const FETCH_BOARDS = gql`
query fetchBoards{
  fetchBoards{
    _id
    writer
    title
    contents
    createdAt
  }
}
`

const DELETE_BOARD = gql`
  mutation deleteBoard($aaa: ID!){
    deleteBoard(boardId: $aaa)
  }
`

const Row = styled.div`
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;

  :hover:not(:nth-of-type(1)){
    background-color: lightgray
  }

`

const Column = styled.div`
  width: 20%;
`

export default function Map3Page(){
  
  const { data, refetch } = useQuery(FETCH_BOARDS)
  const [ deleteBoard ] = useMutation(DELETE_BOARD)
  
  const onClickDelete = async(event) => {
    alert('삭제시작')
    try {
      await deleteBoard({
        variables: {
          aaa: event.target.id
        },
        refetchQueries: [{query: FETCH_BOARDS}]
      })
      alert('삭제완료')
    } catch(error) {
      alert(error.message)

      refetch();
    }
  }

  return(
    <>
      <Row>
        <Column><input type="checkbox"/></Column>
        <Column>작성자</Column>
        <Column>제목</Column>
        <Column>작성일</Column>
      </Row>
      {data?.fetchBoards.map( (data) => (
        <Row key={data._id}>
          <Column><input type="checkbox"/></Column>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
          <Column>{getDate(data.createdAt)}</Column>
          <Column><button id={data._id} onClick={onClickDelete}></button></Column>
        </Row>
      ))}
    </>
  )
}