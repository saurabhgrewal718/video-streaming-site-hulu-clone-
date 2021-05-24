const API_KEY = process.env.API_KEY;

export default {
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week/api_key:${API_KEY}&language=en-US`,
    },
    fetchTopRated:{
        title:'Top Rated',
        url:`/movie/top_rated?api_key:${API_KEY}&language=en-US`,
    },
    fetchActionMovies:{
        title:'Action',
        url:`/discover/movie?api_key:${API_KEY}&with_generes=28`
    },
    fetchComedyMovies:{
        title:'Comedy',
        url:`/discover/movie?api_key:${API_KEY}&with_generes=35`
    },
    fetchHorrorMovies:{
        title:'Horror',
        url:`/discover/movie?api_key:${API_KEY}&with_generes=27`
    },
    fetchRomanceMovies:{
        title:'Romance',
        url:`/discover/movie?api_key:${API_KEY}&with_generes=10749`
    },
    fetchMystry:{
        title:'Trending',
        url:`/discover/movie?api_key:${API_KEY}&with_generes=9648`
    },
    fetchWestern:{
        title:'Western',
        url:`/discover/movie?api_key:${API_KEY}&with_generes=878`
    },
    fetchAnimation:{
        title:'Animation',
        url:`/discover/movie?api_key:${API_KEY}&with_generes=37`
    },
    fetchTV:{
        title:'TV Movie',
        url:`/discover/movie?api_key:${API_KEY}&with_generes=16`
    }
}