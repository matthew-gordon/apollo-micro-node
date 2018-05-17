import { merge } from 'lodash';

const rootResolvers = {
  Query: {
    hi: (root, args, context, info) => 'Hello world Query from users service',
  },
  Mutation: {
    hi: (root, args, context, info) => 'Hello world Mutation from users service',
  },
};

export default merge(rootResolvers);
