import Query from './Query';
import Mutation from './Mutation';

const rootSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`;

export default [
  Query,
  Mutation,
  rootSchema,
];
