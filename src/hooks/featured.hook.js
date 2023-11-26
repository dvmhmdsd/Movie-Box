import { useQuery } from "@tanstack/react-query";
import { GET } from "../utils/axios.interceptor";
import { getDefaults } from "./defaults";

export default function useFeaturedData() {
  const defaults = getDefaults({});
  return useQuery({
    queryKey: [defaults.featured.KEY],
    queryFn: () => {
      return GET({
        url: defaults.featured.BASE_URL,
      });
    },
  });
}
