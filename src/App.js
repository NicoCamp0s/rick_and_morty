import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Nav from "../src/components/Nav/Nav.jsx";
import axios from 'axios';
import Forms from './components/Forms/Forms.jsx';
import { useNavigate } from 'react-router-dom';

function App() {

  const [character, setCharacter] = useState([]);
  const [ids, setIds] = useState([]); 
  const {pathname} =useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {if (!access) navigate("/")},[access])

  const onSearch = (id) => {
    const URL = "https://be-a-rym.up.railway.app/api";
    const key = "09f9a3ed3588.33f8871711c1c9d99360";

    const oldIds = [...ids];

    if (ids.find((char) => char === id)) {
      return alert("Personaje repetido");
     } else {
      setIds((oldIds) => [...oldIds, id])
     }

    axios(`${URL}/character/${id}?key=${key}`).then((response) => {
      if (response.data.name) {
        setCharacter((oldChars) => [...oldChars, response.data])
      } else {
        setIds(oldIds)
        alert("Algo salió mal");
      }
    });

    // fetch(`${URL}/character/${id}?key=${key}`)
    //   .then((Response) => Response.json())
    //   .then((data) => {
    //     if (data.name) {
    //       setCharacter((oldChars) => [...oldChars, data]);
    //     } else {
    //       alert("Algo salió mal");
    //     }
    //   });
  }

  const onClose = (id) => { 
    setCharacter(character.filter((char) => char.id !== id));
    setIds(oldIds => oldIds.filter((char) => char !== id));
  }

  return (
    <div className="divApp">
      {pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />} 
      <Routes>
        <Route path='/' element={<Forms setAccess={setAccess} />} />
        <Route 
          path="/home"
          element={<Cards characters={character} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
} 


export default App;
