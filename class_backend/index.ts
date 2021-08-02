import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";
const typeDefs = gql`
  input UpdateBoardInput {
    title: String
    age: Int
  }

  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoard(number: Int!): Board
    fetchBoards: [Board]
  }

  type Mutation {
    createBoard(writer: String!, title: String!, age: Int!): Boolean
    updateBoard(number: Int!, updateBoardInput: UpdateBoardInput!): Boolean
    deleteBoard(number: Int!): Boolean
  }
`;
// gql 안에서 주석처리를 하고 싶으면 #을 붙인다

const resolvers = {
  Query: {
    fetchBoard: (_: any, args: any) => {
      // 데이터 꺼내서 한개 프론트엔드에 주기
      return Board.findOne({ where: { number: args.number } });
    },

    fetchBoards: () => {
      // 데이터 꺼내서 목록 프론트에드에 주기
      return Board.find();
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      // 데이터 만들고, 결과 프론트엔드에 주기
      try {
        await Board.insert({
          writer: args.writer,
          title: args.title,
          age: args.age,
        });
      } catch (error) {
        console.log(error.message);
      }

      return true;
    },
    updateBoard: (_: any, args: any) => {
      Board.update(
        { number: args.number },
        {
          title: args.updateBoardInput.title,
          age: args.updateBoardInput.age,
        }
      );
      return true;
    },
    deleteBoard: (_: any, args: any) => {
      Board.update({ number: args.number }, { deletedAt: new Date() });
      Board.delete({ number: args.number });
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5003,
  host: "34.64.71.71",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
}).then(() => {
  // 연결 성공시 실행
  console.log("접속완료");
  server.listen({ port: 4000 });
});
