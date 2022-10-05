const MoviesService = require("../services/movies");

class MoviesController {


    static async getAll(req, res) {
      const { error, data } = await MoviesService.getAll();
  
      if (error) {
        return res.status(data.status || 500).send({ message: data.message });
      }
      res.send(data);
    }


     static async getSearch(req, res) {
      const {query}  = req.query;
      console.log("QUERY POSTA--->", query);
 
     
      const { error, data } = await MoviesService.getSearch(query);
  
      if (error) {
        return res.status(data.status || 500).send({ message: data.message });
      }
      res.send(data);
    }

    static async getOneMovie(req, res) {
      const {id}  = req.params
     
      const { error, data } = await MoviesService.getOneMovie(id);
  
      if (error) {
        return res.status(data.status || 500).send({ message: data.message });
      }
      res.send(data);
    }


}

module.exports = MoviesController;