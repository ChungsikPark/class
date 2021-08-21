import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import styled from "@emotion/styled";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Wrapper = styled.div`
  width: 550px;
  height: 460px;
  overflow: auto;
`;

const Row = styled.div`
  font-weight: 500;
`;

const Column = styled.span`
  font-weight: normal;
  color: steelblue;
`;

const InfiniteScrollerPage = () => {
  const [hasMore, setHasMore] = useState(true);
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.floor(data?.fetchBoards.length) / 10 + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards.length) setHasMore(false);
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <>
      {/* 쓰로틀링 사용하기 (쿼리) */}
      <div>Infinite-Scroller</div>
      <Wrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={hasMore}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={false}
        >
          {data?.fetchBoards.map((data: any) => (
            <Row key={data._id}>
              Writer: <Column>{data.writer}</Column> | Title:
              <Column>{data.title}</Column> | Contents:{" "}
              <Column>{data.contents}</Column>
            </Row>
          ))}
        </InfiniteScroll>
      </Wrapper>
    </>
  );
};

export default InfiniteScrollerPage;
