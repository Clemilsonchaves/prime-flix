import axios from "axios";

//      Base URL https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmZmZjg3ZjJkOTcyMTlmOTE0ZmNmYTZmYTliMGIyMiIsInN1YiI6IjY0ZmUyNjRhZTBjYTdmMDEyZWI3YWVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4t88LB1H5RiA0D-Mc9n9106nhEGEWvrhYSK1Y8ZIEIc' \
//      --header 'accept: application/json'

const api = axios.create({
  baseURL:'https://api.themoviedb.org/3/'
});

export default api;