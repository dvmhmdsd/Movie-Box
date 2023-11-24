import { useQuery } from "@tanstack/react-query";
import { request } from "../utils/axios.interceptor";

export default function useFeaturedData() {
  const fetchFeaturedMovies = () => {
    return request({
      url: "/trending/movie/day",
    });
  };

  return useQuery({
    queryKey: ["featured"],
    queryFn: fetchFeaturedMovies,
  });
}
