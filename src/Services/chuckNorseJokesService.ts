import { Jokes as JokesService } from "../interfaces/jokes";
const { RESTDataSource } = require('apollo-datasource-rest');



export class ChuckNorseJokesService extends RESTDataSource implements JokesService   {


     getCategories(): string[] {
         throw new Error("Method not implemented.");
     }  

     getRandomJoke(): string {
         throw new Error("Method not implemented.");
     }

     getRandomJokeForCategory(category: string): string {
         throw new Error("Method not implemented.");
     }

     searchForJoke(search: string): string {
         throw new Error("Method not implemented.");
     }



}