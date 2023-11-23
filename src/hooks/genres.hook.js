import { request } from "../utils/axios.interceptor";
import { useQuery } from "@tanstack/react-query";

export default function useGenresData() {
  const fetchGenreList = () => {
    return request({
      url: "/genre/movie/list?language=en",
    });
  };

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenreList,
  });
}
