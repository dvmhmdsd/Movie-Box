import { GET } from "../utils/axios.interceptor";
import { useQuery } from "@tanstack/react-query";

import { getDefaults } from "./defaults";

export default function useGenresData() {
  const defaults = getDefaults({});
  return useQuery({
    queryKey: [defaults.genres.KEY],
    queryFn: () => {
      return GET({
        url: defaults.genres.BASE_URL,
      });
    },
  });
}
