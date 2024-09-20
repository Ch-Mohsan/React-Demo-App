import './App.css';
import React, { useState } from 'react';
import Navebar from './Commponents/Navebar';
import Formtext from './Formtext';

function App() {
  const[mode,setMode]=useState("light");
  const showMode=()=>{
 if(mode===light){
   setMode("dark")