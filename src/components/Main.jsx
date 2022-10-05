import { Route, Routes } from "react-router-dom";
import { Provider, useDispatch, useSelector} from "react-redux";
import store from "../state/store";
import Login from "./Login";
import Movies from "./Movies";
import Navbar from "./Navbar";
import Register from "./Register";
import SingleMovie from "./SingleMovie";
import { checkLogin } from "../state/user";
import { useEffect } from "react";
import Profile from "./Profile";


const Main = () => {

const dispatch = useDispatch()

useEffect(() => {

  dispatch(checkLogin())

}, [])


 

  return (
    <>
      
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Movies />} />
          <Route path="/single/:id" element={<SingleMovie />} />
        </Routes>
    </>
  );
};

export default Main;
