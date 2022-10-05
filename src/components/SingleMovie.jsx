import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { setSingleMovie } from "../state/singlemovie";
import noimage from "../img/noimagenpng.png";
import axios from "axios";
import "../styles/singlemovie.css"
import { Chip } from "@mui/material";
import { SubscriptRounded } from "@mui/icons-material";


const SingleMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.single);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/movies/single/${id}`).then((res) => {
      console.log(res);
      dispatch(setSingleMovie(res.data));
    });
  }, [dispatch, id]);

  if (Object.keys(movie).length === 0) {
    return <h1>Loading...</h1>;
  }


  


  return (
    
    <div class=" contenedor" style={{backgroundImage: `url("https://image.tmdb.org/t/p/w1000_and_h450_multi_faces${movie.backdrop_path}")`}}>

      <div className="subcontenedor bg_image">

 <div className="poster">
        {movie.poster_path ? (
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            alt="poster_path"
          />
        ) : (
          <img src={noimage} alt="not_image" />
        )}
      </div>
      <div className="contenedor-detalles">
        <div className="nombre">
          <p>{movie.title}</p>
        </div>
        <div className="year">
        <p className="year">({(movie.release_date).substr(0,4)})</p>
        </div>

        <div className="resumen">
          <h3>Resume:</h3>
          <p>"{movie.overview}"</p>
        </div>

        <div className="genero">
        <h3>Genres:</h3>
        <div className="chip-contenedor">
          {movie &&
          movie?.genres.map((genre) => {
            return <div className="chip"><Chip label={genre.name} color="primary" /></div>;
          })}
        </div>
        
      </div>
      </div>

      </div>
     
      

   
    </div>
  );
};

export default SingleMovie;
