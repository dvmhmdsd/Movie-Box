import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios.interceptor";

export default function useMoviesData() {
  const fetchMovieList = () => {
    return request({
      url: "/discover/movie?include_adult=false&include_video=false&sort_by=popularity.desc",
    });
  };

  return useQuery({ queryKey: ["movies"], queryFn: fetchMovieList });
}
