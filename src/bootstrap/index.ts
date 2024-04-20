import 'reflect-metadata';
import { createExpressServer, Controller } from 'routing-controllers';
import corsOptions from './config/corsConfig';
import registerController from './autoloader/controller';
import moduleAlias from 'module-alias';

const startServer = async (rootDir: string) => {
  // setting alias
  moduleAlias.addAliases({
    '@root': rootDir,
    '@config': `${rootDir}/bootstrap/config`,
    '@presentation': `${rootDir}/presentation`
  });

  // init application
  const app = createExpressServer({
    routePrefix: '/api',
    controllers: Object.values(await registerController(rootDir)) as typeof Controller[],
    cors: corsOptions
  });

  /**
   * Port number for the server to listen on.
   * Default is 2207, can be overridden with the PORT environment variable.
   */
  const PORT: any = process.env.PORT || 2207;

  /**
   * Start the server and listen on the specified port.
   */
  app.listen(PORT, () =>
    console.log(`Server is running in http://localhost:${PORT}`),
  )
};

export { startServer }
