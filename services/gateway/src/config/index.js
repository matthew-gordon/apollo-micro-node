const NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  cors: {
    origin: '*',
    credentials: true,
    allowMethods: ['GET', 'POST'],
    allowHeaders: [
      'Content-Type',
    ],
    keepHeadersOnError: true,
  },

};
