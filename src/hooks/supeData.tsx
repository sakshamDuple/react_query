import { useQuery } from "react-query";
import { Superhero } from "../model/interface";
import axios from "axios";

const fetchSuperHero = () =>
    axios.get<Superhero[]>('https://6219cf0581d4074e85b1f64b.mockapi.io/students').then((response) => response.data);

export const useSupeData = (onSuccess: any, onError: any) => {
    return useQuery<Superhero[]>('supers', fetchSuperHero, {
        cacheTime: 60000, //cache goes to garbage after 1 min (default is 5 min if not given)
        staleTime: 30000, //it behaves as if things in our cache need not to change for given amount of time
        refetchInterval: 10000, //will refetch all the api of the page after given amount of time (will be very helpful with live data updating on page) (con- will rerender the page and will move you to top of page after re-render)
        onSuccess,
        onError,
        // select: (data:Superhero[]) => {filter the data as per requirement}
    });
}