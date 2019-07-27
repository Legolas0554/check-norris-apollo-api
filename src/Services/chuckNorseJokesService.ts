import { Jokes as JokesService } from "../interfaces/jokes";
import { RESTDataSource } from 'apollo-datasource-rest';
import { environment } from "../enviroments/environment";



export class ChuckNorseJokesService extends RESTDataSource implements JokesService   {
    
    constructor() {
        super();
        this.baseURL = environment.baseURL;
    }

    async getCategories()   {
        return this.get<string[]>(environment.categoriesEndpoint);
    }  

    async getRandomJoke() {
        return this.get<string>(environment.randomEndpoint);
    }

    async getRandomJokeForCategory(category: string) {
        return this.get<string>(`${environment.randomEndpoint}?category=${category}`);
    }

    async searchForJoke(search: string) {
        return this.get<string>(`${environment.searchEndpoint}?query=${search}`);
    }

}