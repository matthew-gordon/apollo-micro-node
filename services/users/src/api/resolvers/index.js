import { merge } from 'lodash';

const rootResolvers = {
  Query: {
    hiUsers: (root, args, context, info) => 'Hello world Query from users service',
  },
  Mutation: {
    hiUsers: (root, args, context, info) => 'Hello world Mutation from users service',
  },
};

export default merge(rootResolvers);
