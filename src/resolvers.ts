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
        categories: async ( _ : any, args: any, {dataSources } : any) : Promise<string[]> => 
             dataSources.ChuckNorrisJokesService.getCategories() 
      },
    };