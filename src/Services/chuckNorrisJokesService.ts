import { RESTDataSource } from 'apollo-datasource-rest';
import { environment } from "../enviroments/environment";
import { ChuckNorrisJokeResponse} from "../models/response";
import { JokesService } from '../interfaces/jokesService';



export class ChuckNorrisJokesService extends RESTDataSource implements JokesService  {
    
    constructor() {
        super();
        this.baseURL = environment.baseURL;
    }

    async getCategories()   {

        const result = await this.get<[string]>(environment.categoriesEndpoint);
        
        return result;
    }  

    async getRandomJoke() {
        const result = await this.get<ChuckNorrisJokeResponse>(environment.randomEndpoint);

        return result.value;
    }

    async getRandomJokeForCategory(category: string) {
        const result = await this.get<ChuckNorrisJokeResponse>(environment.randomEndpoint, {category});

        return result.value;
    }

    async searchForJoke(query: string) {
        const result = await this.get<ChuckNorrisJokeResponse>(environment.searchEndpoint, {query});
        
        return result.value;
    }
    
}