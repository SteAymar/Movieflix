import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../state/movies";
import axios from "axios";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { logOutUser, sendLoginRequest } from "../state/user";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';



const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = useSelector((state) => state.user);

  const changeHanddler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const dispatch = useDispatch();

  const handlerClick = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/movies/search`, {
        params: { query: query },
      })
      .then((res) => {
        console.log("MOVIES BUSQUEDA----->", res.data.results);
        dispatch(setMovies(res.data.results));
      });
  };

  const handleLogout = (e) => {
    localStorage.clear("token");
    dispatch(logOutUser());
    navigate("/");
  };

  return (
    <>
      <div className="navbar">
        <div className="home">
          <a href="/">
            <h2>HOME</h2>
          </a>
        </div>

        <div className="search-container">
          <form onSubmit={handlerClick}>
            <input
              type="text"
              placeholder="Searh Movie"
              id="search"
              className="search"
              value={query}
              onChange={changeHanddler}
            />
              <SearchIcon className="button-search" sx={{ color: "#000000" }}/>
            
          </form>
        </div>
        {user?.id ? (
          <>
            <div className="profile-container">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle sx={{ color: "white" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {user.name} {user.lastname}
                <MenuItem onClick={handleClose}>
                  <Link to="/profile" className="link" >Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </>
        ) : (
          <div >
            <ul className="button-container">
              <li>
                <Link className="link" to="/login">
                  <Button variant="contained" href="#contained-buttons" size="small">
                    LOGIN
                  </Button>
                </Link>
              </li>
              <li>
                <Link className="link" to="/register">
                  <Button variant="contained" href="#contained-buttons" size="small">
                    <p>REGISTER</p>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
