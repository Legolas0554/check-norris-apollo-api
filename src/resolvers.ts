import { ChuckNorrisJokesService } from './services/chuckNorrisJokesService'

const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];


export default {
    Query: {
        categories: async ( source: any, args: any, { dataSources }  : any) : Promise<string[]> => 
        dataSources.ChuckNorrisJokesService.getCategories(),

        randomJoke: async ( source: any, args: any, { dataSources }  : any) : Promise<string> => 
        dataSources.ChuckNorrisJokesService.getRandomJoke(),

        categoryJoke: async ( source: any, {category} :any, { dataSources }  : any) : Promise<string> => 
        dataSources.ChuckNorrisJokesService.getRandomJokeForCategory(category),

        foundJoke: async ( source: any, {query} :any, { dataSources }  : any) : Promise<string> => 
        dataSources.ChuckNorrisJokesService.searchForJoke(query) 
      }, 
    };