import './App.css';
import Navbar from './component/Navbar';
import React, { useState } from 'react'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import About from './component/About';
import Textform from './component/Textform';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState("white")
  const [alert, setAlert] = useState(null)
  const showAlert = (msg, type)=>{
setAlert({
  msg : msg,
  type : type
})
  }
  let toggleButton = () =>{
    if(mode === "white")
    {
      setMode('dark')
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode" , "success")

    }
    else{
      setMode('white')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode" , "success")


    }
  }
  return (
    <>
    <Router>  
    <Navbar title = "TextUtils" mode ={mode} toggleButton = {toggleButton} />
<Alert alert= {alert}/>
    <div className='container my-2'>

    <Routes>
    <Route exact path='/About' element={<About/>}/>
    <Route exact path='/' element={<Textform title= "Text Utils"/>}/>

      </Routes>

      </div>

    </Router>
    </>
  );
}

export default App;
