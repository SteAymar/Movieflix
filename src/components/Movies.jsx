import Card from "../commons/Card";
import "../styles/movies.css"
import {useDispatch, useSelector} from "react-redux"
import axios from "axios";
import { useEffect } from "react";
import { setMovies } from "../state/movies";

const Movies = () => {

  const dispatch = useDispatch()


  useEffect(() => {
    axios.get("http://localhost:3001/api/movies").then((res) => {
      console.log("MOVIES----->", res.data.results);
      dispatch(setMovies(res.data.results));
    });
  }, []);

const movies = useSelector(state => state.movies)

  return(
    <div className="gridMovie">
      {movies.map((movies,i)=><Card movies={movies} key={i}/>)}
      
    </div>
  ) 
};

export default Movies;
