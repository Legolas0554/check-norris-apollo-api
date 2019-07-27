const defaultPort = 4000;

interface Environment {
  apollo: {
    introspection: boolean,
    playground: boolean
  },
  port: number|string;
  baseURL: string;
  categoriesEndpoint: string;
  randomEndpoint: string;
  searchEndpoint: string;
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true'
  },
  port: process.env.PORT || defaultPort,
  baseURL:'https://api.chucknorris.io/',
  categoriesEndpoint:'/jokes/categories',
  randomEndpoint: '/jokes/random',
  searchEndpoint: '/jokes/search'
};