import { ChuckNorrisJokesService } from './services/chuckNorrisJokesService'

//could not find a better way had to set the arguments as any type
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
