import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { useState, ChangeEvent, MouseEvent } from "react";
import _ from "lodash";

const FETCH_BOARD = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Column = styled.span`
  padding: 0 40px;
`;

const Page = styled.span`
  padding: 0 10px;
`;

export default function Searchpage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARD);
  const [search, setSearch] = useState("");

  const getDeboune = _.debounce((data) => {
    refetch({ search: data });
    setSearch(data);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDeboune(event.target.value);
  };

  // const onClickSearch = () => {
  //   refetch({ search: search });
  // };

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ search: search, page: Number((event.target as Element).id) });
  };
  return (
    <>
      <input onChange={onChangeSearch} type="text" />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
          <Column>{data.createdAt}</Column>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={index} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
