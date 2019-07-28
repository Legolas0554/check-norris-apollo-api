import { ApolloServer } from 'apollo-server';
import { ChuckNorrisJokesService } from './services/chuckNorrisJokesService';
import { environment } from './enviroments/environment';
import resolvers from './resolvers';
import typeDefs from './schemas';

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  debug: environment.apollo.debug,
  dataSources: () => ({
        ChuckNorrisJokesService: new ChuckNorrisJokesService(),
  }),
});

server.listen(environment.port)
  .then(({ url }) => console.log(`Server ready at ${url}. `));

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}
