import App from '../';

const port = process.env.PORT || 3000;
const app = new App();

function onError(error) {
  if (error.syscall !== 'listen') throw error;
  const bind = (typeof port === 'string') ? `Pipe ${port}` : `Port ${port.toString()}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const { server } = app;
  const addr = app.server.address();
  const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;

  console.log(`Listening on ${bind}...`);
}

app.server.on('error', onError);
app.server.on('listening', onListening);
