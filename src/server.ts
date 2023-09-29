import { Server } from 'http';
import app from './app';
import subscribeToEvents from './app/events';
import config from './config';
import { errorLogger, infoLogger } from './shared/logger';
import { RedisClient } from './shared/redis';

async function bootstrap() {
  await RedisClient.connect().then(() => {
    subscribeToEvents();
  });
  const server: Server = app.listen(config.port, () => {
    infoLogger.info(`Server running on port ${config.port}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        infoLogger.info('Server closed');
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error: unknown) => {
    errorLogger.error(error);
    exitHandler();
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  process.on('SIGTERM', () => {
    infoLogger.info('SIGTERM received');
    if (server) {
      server.close();
    }
  });
}

bootstrap();
