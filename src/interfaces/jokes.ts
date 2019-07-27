export interface Jokes {
    RetrieveCategories(): string[];
    RetrieveRandomJoke():string;
    RetrieveRandomJokeForCategory(category:string):string;
    SearchForJoke(search:string):string;
}