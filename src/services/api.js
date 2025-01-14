import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzBiNmRjMzMzNDM2N2JiNjM5MWZlMWMwNDQyODA5NSIsIm5iZiI6MTczNjc5MDA4NS42MTc5OTk4LCJzdWIiOiI2Nzg1NTA0NTk0ZmM4N2VmNDg3YjNjMjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.E0o16BD2_Smb_TDiuwrY8dzrocuHfa1YBGZX2YhnL1o';

export const fetchAllMovies = async () => {
    const { data } = await axios.get('/discover/movie', {
    params: {
    include_adult: 'false',
    include_video: 'false',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
 
});
    return data.results;
};

export const fetchMoviesById = async id => {
    const { data } = await axios.get(`/movie/${id}`);
    return data;
}

export const fetchReviewsById = async movieId => {
    const { data } = await axios.get(`/movie/${movieId}/reviews`);
    return data.results;
};

export const fetchCastById = async movieId => {
    const { data } = await axios.get(`/movie/${movieId}/credits`);
    return data.cast;
};

export const fetchMovieByQuery = async query => {
    const { data } = await axios.get(`/search/movie?query=${query}`);
    return data.results;
};