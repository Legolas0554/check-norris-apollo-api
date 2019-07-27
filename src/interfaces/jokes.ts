import { RESTDataSource } from "apollo-datasource-rest";

export interface Jokes extends RESTDataSource {
    getCategories(): Promise<string[]>;
    getRandomJoke(): Promise<string>;
    getRandomJokeForCategory(category:string): Promise<string>;
    searchForJoke(search:string): Promise<string>;
}