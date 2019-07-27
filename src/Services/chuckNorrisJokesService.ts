import { RESTDataSource } from 'apollo-datasource-rest';
import { environment } from "../enviroments/environment";
import { ChuckNorrisJokeResponse} from "../models/response";



export class ChuckNorrisJokesService extends RESTDataSource  {
    
    constructor() {
        super();
        this.baseURL = environment.baseURL;
    }

    async getCategories()   {
        return this.get<string[]>(environment.categoriesEndpoint);
    }  

    async getRandomJoke() {
        const result = await this.get<ChuckNorrisJokeResponse>(environment.randomEndpoint);

        return result.value;
    }

    async getRandomJokeForCategory(category: string) {
        const result = await this.get<ChuckNorrisJokeResponse>(environment.randomEndpoint, {category});

        return result.value
    }

    async searchForJoke(search: string) {
        const result = await this.get<ChuckNorrisJokeResponse>(environment.searchEndpoint, {search});

        return result.value
    }
    
}