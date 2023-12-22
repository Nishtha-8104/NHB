import React from "react";
import "./bc.css"
import { useState } from "react";


function Input(props) {
  const [inputValue, setInputValue] = useState({
    batch: '',
    serial:'',
    no:''
  });

  const handleOnChange = (e) => {
    const{name,value}=e.target;

      setInputValue(
        (prev)=>{
               return{
                ...prev,
                [name]:value
               }
        }
      );
  };

  const handleOnClick = (e) => {
    props.onAdd(inputValue);

    // console.log("User input:", inputValue);
    //  setInputValue({batch:'',serial:''});

    e.preventDefault();
  };

  return (
    <div className="input">
      <form>
        Enter Batch no:
        <input type="text" name="batch" value={inputValue.batch} onChange={handleOnChange} />
        <br/>
        Enter Serial no: 
        <input type="text" name="serial" value={inputValue.serial} onChange={handleOnChange} />
        <br/>
        Number of print:
        <input type="text" name="no" value={inputValue.no} onChange={handleOnChange} />
       
        <button type="submit" onClick={handleOnClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Input;
