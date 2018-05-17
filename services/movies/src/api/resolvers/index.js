import { merge } from 'lodash';

const rootResolvers = {
  Query: {
    hiMovies: (root, args, context, info) => 'Hello world Query from movies service',
  },
  Mutation: {
    hiMovies: (root, args, context, info) => 'Hello world Mutation from movies service',
  },
};

export default merge(rootResolvers);
