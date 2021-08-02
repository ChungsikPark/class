import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Product from "./Product.postgres";

const typeDefs = gql`
  scalar Date

  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  type ProductReturn {
    _id: ID
    seller: String
    name: String
    detail: String
    price: Int
    createdAt: Date
  }

  type Return {
    _id: String
    number: Int
    message: String
  }

  type Query {
    fetchProduct(productId: ID): ProductReturn
    fetchProducts(page: Int): [ProductReturn!]
  }

  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): Return
    updateProduct(
      productID: ID
      updateProductInput: UpdateProductInput!
    ): Return
    deleteProduct(productID: ID): Return
  }
`;

const resolvers = {
  Query: {
    fetchProduct: (_: any, args: any) => {
      return Product.findOne({ where: { productId: args._id } });
    },

    fetchProducts: () => {
      return Product.find();
    },
  },
  Mutation: {
    createProduct: async (_: any, args: any) => {
      try {
        const result = await Product.insert({
          seller: args.seller,
          name: args.createProductInput.name,
          detail: args.createProductInput.detail,
          price: args.createProductInput.price,
        });
        console.log(result.identifiers[0]._id);
        return {
          _id: result.identifiers[0]._id,
          number: null,
          message: "크리에이트 성공했다링!!",
        };
      } catch (error) {
        console.log(error.message);
        throw new Error("크리에이트 실패했다링ㅜㅜ");
      }
    },
    updateProduct: async (_: any, args: any) => {
      try {
        await Product.update(
          { _id: args.productID },
          {
            name: args.updateProductInput.name,
            detail: args.updateProductInput.detail,
            price: args.updateProductInput.price,
          }
        );
        console.log(args.productID);
        return {
          _id: args.productID,
          number: null,
          message: "업데이트 성공했다링!!",
        };
      } catch (error) {
        console.log(error.message);
        throw new Error("업데이트 실패했다링ㅜㅜ");
      }
    },
    deleteProduct: async (_: any, args: any) => {
      try {
        await Product.update(
          { _id: args.productID },
          { deletedAt: new Date() }
        );
        return {
          _id: args.productID,
          number: null,
          message: "딜리트 성공했다링!!",
        };
      } catch (error) {
        console.log(error.message);
        throw new Error("딜리트 실패했다링ㅜㅜ");
      }
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
  console.log("서버연결 성공했다링!!");
  server.listen({ port: 4000 });
});
