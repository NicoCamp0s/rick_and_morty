import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Nav from "../src/components/Nav/Nav.jsx";
import Forms from './components/Forms/Forms.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as act from "./redux/action";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {characters, ids, access} = useSelector(state => state)

  useEffect(() => {
    if (!access) navigate("/")
  },[access])

  const onSearch = (id) => {
    if(id >= 827){
      return alert("El personaje no existe")
    }
    else {
    if (ids.some((char) => char === id )) {
       return alert("Personaje repetido");
    }
    dispatch(act.addCharacters(id))
  }}

  const onClose = (id) => { 
    dispatch(act.deleteCharacters(id))
  }

  return (
    <div className="divApp">
      {pathname !== "/"  && <Nav onSearch={onSearch}   />} 
      <Routes>
        <Route path='/' element={<Forms />} />
        <Route 
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
} 


export default App;
