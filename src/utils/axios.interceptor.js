import axios from "axios";

const client = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export const GET = ({ ...options }) => {
  client.defaults.headers.common.Authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzhjNDgwOTk4Njc3M2Y5OGY3ZGVlMzdjMmJjZjBlNCIsInN1YiI6IjY1NWRmNzJkZmFiM2ZhMDExYmE5MjdlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sGYCyJG7-_J5_JcijT0zAaS9FgW4_GflJM-2gu8S2WM";

  return client(options);
};
