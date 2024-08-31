 
import useData from './useData';
import genres from '../data/genres';

export interface Gener{
    id: number;
    name: string;
    image_background: string;
}

const useGeneres = () => ({data: genres, isLoading: false, error: null})

export default useGeneres