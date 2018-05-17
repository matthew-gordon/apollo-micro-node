import {
  mergeSchemas,
  introspectSchema,
  makeRemoteExecutableSchema,
} from 'graphql-tools';

import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

async function makeMergedSchema() {
  const createRemoteSchema = async (uri) => {
    const fetcher = new HttpLink({ uri, fetch });
    return makeRemoteExecutableSchema({
      schema: await introspectSchema(fetcher),
      link: fetcher,
    });
  };

  const UserSchema = await createRemoteSchema('http://users-service:3000/api/graphql');
  const MoviesSchema = await createRemoteSchema('http://movies-service:3000/api/graphql');

  const schema = mergeSchemas({
    schemas: [UserSchema, MoviesSchema],
  });

  return schema;
}

export default makeMergedSchema(); // eslint-disable-line import/prefer-default-export
