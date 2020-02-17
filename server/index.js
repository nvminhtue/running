const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    password: String!
    records: [Record]
  }

  type Record {
    id: ID!
    isOff: Boolean!
    isLate: Boolean!
    lateTime: String!
    actualTime: String!
    penalty: String
    createdAt: String!
  }

  input RecordInput {
    isOff: Boolean!
    isLate: Boolean!
    lateTime: String!
    actualTime: String!
    penalty: String
  }

  type Query {
    records: [Record]
    record: [Record]
    user(id: String!): User
  }

  type Mutation {
    createRecord(record: RecordInput): String,
  }
`;

// const defaultRecord = [
//     {
//         name: 'Pato',
//         isOff: false,
//         isLate: true,
//         lateTime: '10',
//         actualTime: '15',
//         penalty: '20',
//     }
// ];

// const resolvers = {
//   User: {
//     async records(user) {
//       try {
//         const userRecords = await defaultRecord.where('name', '===', user.name).get();
//         return userRecords.map(record => record.data);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   },
//   Query: {
//     async records(user) {
//       try {
//         const userRecords = await defaultRecord.where('name', '===', user.name).get();
//         return userRecords.map(record => record.data);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   }
// };
let records = [];

const resolvers = {
  Query: {
    records: async () => Promise.resolve(records),
    record: async (_, { recordId }) => Promise.resolve(records.find(r => r.id === recordId))
  },
  Mutation: {
    createRecord: async (_, { record }) => {
      const newId = records.length === 0 ? 1: records[records.length - 1].id + 1;
      records = [ ...records, { record, id: newId } ];
      return Promise.resolve('success');
    }
  }
}
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`server ready at ${url}`);
});

