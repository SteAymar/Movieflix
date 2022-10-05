import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import noimage from "../img/noimagenpng.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { BottomNavigationAction } from "@mui/material";
import "../styles/profile.css";
import "../styles/card.css";


const Profile = () => {
  const user = useSelector((state) => state.user);
  const [favorite, setFavorite] = useState([]);


  useEffect(() => {
    if(user){
      axios
      .get("http://localhost:3001/api/fav", { headers: { id: user.id } })
      .then((favs) => favs.data)
      .then((movies) => setFavorite(movies));
    }
  }, [user]);



 if(!user){
  return(
    <h1>Loading...</h1>
  )
 }

  return (
    <div className="contenedor-profile">
      <div className="saludo">
          <h2>Welcome back {user.name}</h2>
      </div>
      <div className="favourite">
        <h3>My favourites</h3>
      </div>
      <div className="grid-fav">
        {favorite.map((movies, i) => {
          console.log("FAVORITAS--->", movies);
          return (
            <div className="card">
              <div className="card-image">
                {movies.movieImage ? (
                  <img
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movies.movieImage}`}
                    alt="poster_path"
                  />
                ) : (
                  <img src={noimage} alt="not_image" />
                )}
              </div>

              <div className="card-title">
                <h3>{movies.movieName}</h3>
              </div>

              <div>
                <BottomNavigationAction
                  label="Delete"
                  icon={<DeleteIcon />}
                  onClick={(e) => {
                    e.preventDefault();
                    axios.delete("http://localhost:3001/api/fav", {
                      headers: { idFav: movies.id }
                    }).then(()=>{
                      const newArray=favorite.filter((fav)=>fav.id!==movies.id)
                      setFavorite(newArray)
                    });
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Profile;
