import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Nav from "../src/components/Nav/Nav.jsx";
import Forms from './components/Forms/Forms.jsx';
import Favorites from './components/Favorites/Favorites';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as act from "./redux/action";
import Alert from './components/Alert/Alert';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {characters, access} = useSelector(state => state) 

  // useEffect(() => {
  //   if (!access) navigate("/")
  // },[access])

  useEffect(() => {
    if(pathname === "/") navigate("/home")
  })
  const  onSearch = (id) => {
    if(id >= 827) {
      return alert("El personaje no existe")
    }
    else {
   dispatch(act.addCharacters(id))
  }}

  const onClose = (id) => { 
    dispatch(act.deleteCharacters(id))
  }
  
  return (
    <div className="divApp">
      <Alert />
      {pathname !== "/"  && <Nav onSearch={onSearch}  />} 
      <Routes>
        <Route path='/' element={<Forms />} />
        <Route 
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
} 


export default App;
