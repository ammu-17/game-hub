 
import useData from './useData';
import { Gener } from './useGeneres';

export interface Platform {
    id: number;
    name : string;
    slug : string
}

export interface Game{
    id:number;
    name:string;
    background_image: string;
    parent_platforms : {platform: Platform}[];
    metacritic: number;
} 

const GameHook = (selectedGenre:Gener | null) => useData<Game>('/games',{ params:{genres:selectedGenre?.id} },[selectedGenre?.id]) 

export default GameHook;