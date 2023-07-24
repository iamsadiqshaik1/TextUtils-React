import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {BrowserRouter as Router,Routes ,Route} from "react-router-dom";

function App() {
  const [mode,setmode]=useState("light");
  const [alertMsg,setalertMsg] = useState(null);

  const showAlert=(message,type)=>{
    setalertMsg({
      msg: message,
      type: type
    })
    setTimeout(()=>{
    setalertMsg(null);
    },3000);
  }

  const toogleMode = () =>{
    if(mode==="light")
    {
      setmode("dark");
      document.body.style.backgroundColor="black";
      showAlert("Dark mode Enabled","success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode Enabled","success");
    }
  }
  return (
<div>


  <Router>
  <Navbar mode={mode} toogleMode={toogleMode}></Navbar>
  <Alert alert={alertMsg} />
  <div className="container my-3">

  <Routes >
          <Route path="/About" element={<About />}>
          </Route>
          <Route path="/" 
         element = { <TextForm mode={mode} heading="please enter the text to analyze"> </TextForm>} >
          </Route>
  </Routes>
 
  </div>
  </Router>
  </div>

  );
}

export default App;
