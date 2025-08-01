import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light")
  const[alert,setAlert]=useState("null");

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    },1500)

  }
  const toggleMode=()=>{
          if(mode==='light')
              {setMode("dark");
                document.body.style.backgroundColor="#1a2d3fff";
                document.body.style.color="white";
                showAlert("Dark mode has been enabled","success");
                document.title='TextUtils - DarkMode';
                setInterval(()=>{
                  document.title='TextUtils is amazing';
                },2000)
                 setInterval(()=>{
                  document.title='Download TextUtils now';
                },1500)
              }
          else{
            setMode("light");
               document.body.style.backgroundColor="white";
                document.body.style.color="#212529";
               showAlert("Light mode has been enabled","success");
               document.title='TextUtils - LightMode';
          }
  }
  return (<>
  <Router>
   <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode}>
    </Navbar>
    <Alert alert={alert}/>
    <div className='container my-3'>
      <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm  heading='Enter your text below' mode={mode} showAlert={showAlert}/>} />
             
          
      </Routes>
      
      {/*<About></About>*/}
    </div>
    </Router>
    
    </>
  );
}

export default App;
