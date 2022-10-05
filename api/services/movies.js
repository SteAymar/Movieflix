const axios = require("axios");

class MoviesService {

    static async getAll() {
        try {
          const resp = await axios.get("https://api.themoviedb.org/3/movie/popular", {
            params: {
             api_key:"b743cfabcde18297cc27351cdc8da701",
            },
          });
      
          return {
            error: false,
            data: resp.data,
          };
        } catch ({ response }) {
          const { error } = response.data;
          console.error(error);
          return { error: true, data: error };
        }
      }


      static async getSearch(query) {
        try {
          const resp = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b743cfabcde18297cc27351cdc8da701&language=en-US&query=${query}&page=1&include_adult=false`, {
         
          });
      
          return {
            error: false,
            data: resp.data,
          };
        } catch ({ response }) {
          const { error } = response.data;
          console.error(error);
          return { error: true, data: error };
        }
      }

      static async getOneMovie(id) {
        try {
          const resp = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b743cfabcde18297cc27351cdc8da701&language=en-US`, {
         
          });
      
          return {
            error: false,
            data: resp.data,
          };
        } catch ({ response }) {
          const { error } = response.data;
          console.error(error);
          return { error: true, data: error };
        }
      }

      
}

module.exports = MoviesService;