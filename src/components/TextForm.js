import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");

  const handleupClick = () => {
    //console.log("testdata");
    let newText=Text.toUpperCase();
    setText(newText);
  };

  const handlelowClick = () => {
    //console.log("testdata");
    let newText=Text.toLowerCase();
    setText(newText);
  };
  

  const handleOnChange = (event) => {
    //console.log("onchange");
    setText(event.target.value);
    
  };

  let newText1="";

  const handleOnsearch =(event)=>{
    newText1= event.target.value;
    console.log(newText1);
  }

  
  const Onsearch =()=>{
    let t1=Text.search(newText1);
    console.log(Text.substring(t1), Text.search(newText1));
  }

  return (
    <div>
    <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={Text} 
          placeholder="Enter the text"
          onChange={handleOnChange}
          id="myBox2"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>
        Convert to lowercase
      </button> 
    <div>   
        <textarea
          className="form-control my-3"
          
          placeholder="Enter the text"
          onChange={handleOnsearch}
          id="myBox"
          rows="1"
        ></textarea>
      <button className="btn btn-success" onClick={Onsearch}>
        search
      </button> 
    </div>

    </div>
    <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`} style={{ border: "2px solid black",borderRadius:"2px"}}>
    <h1>Your Text Summary</h1>
    <p>This "{Text}" <br/> contains {Text.length} characters and {Text.split(" ").length} words  </p>
    </div>

    </div>
  );
}
