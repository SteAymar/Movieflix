import React, { useState } from "react";
import "../styles/card.css";
import noimage from "../img/noimagenpng.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Alert, BottomNavigationAction, Snackbar } from "@mui/material";

const Card = ({ movies }) => {
  const user = useSelector((state) => state.user);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleClose = (event, reason) => {
    setError(false);
    setSuccess(false)
  };

  const handleFav = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/fav", {
        movieId: movies.id,
        movieName: movies.title,
        movieImage: movies.poster_path,
        id: user.id,
      })
      .then((res) => {
        if (!res.data.ok) {
          setError(true);
          setErrorMessage(res.data.errorMessage);
        }else{
          setSuccess(true)
        }

      });
  };

  return (
    <div className="card">
      <Link to={`/single/${movies.id}`}>
        <div className="card-image">
          {movies.poster_path ? (
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movies.poster_path}`}
              alt="poster_path"
            />
          ) : (
            <img src={noimage} alt="not_image" />
          )}
        </div>
      </Link>

      <div className="card-title">
        <h3>{movies.title}</h3>
      </div>
      {user === null ? (
        <></>
      ) : (
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          onClick={handleFav}
        />
      )}
        
      <Snackbar
        open={error}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="info" sx={{ width: "100%" }} onClose={handleClose}>
          {errorMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={success}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%" }} onClose={handleClose}>
          Agregada a favoritos exitosamente
        </Alert>
      </Snackbar>
 
    </div>
  );
};

export default Card;
