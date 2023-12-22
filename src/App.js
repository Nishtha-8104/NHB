import React from "react";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./App.css";
import Input from "./Input";
import BarcodeGenerator from "./barcode";


function App() {
  const printRef = useRef();
  const [batchNum, setBatch] = useState({
    batch: "",
    serial: "",
    no: "",
  });

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const saveVar = (value) => {
    setBatch(value);
    console.log(value);
  };

  const num = parseInt(batchNum.no, 10);

  const snum = parseInt(batchNum.serial, 10);
  var temp = snum;
  const arrForSerial = [];

  for (let i = 0; i < num; i++) {
    arrForSerial.push(temp);
    temp += 1;
   }
  // const left = [];
  // const right = [];

  // for (let i = 0; i < num; i++) {
  //   var barcodeElement = (
  //     <BarcodeGenerator
  //       details={batchNum.batch}
  //       key={i}
  //       serialNum={arrForSerial[i]}
        
  //     />
  //   );

  //   if (i <  Math.ceil(num / 2)) {
  //     left.push(barcodeElement);
  //   } else {
  //     right.push(barcodeElement);
  //   }
  // }

  
 
  var pages = [];
  var tempPage = [];

  for (let i = 0; i < num; i++) {
    tempPage.push(
      <BarcodeGenerator
        details={batchNum.batch}
        key={i}
        serialNum={arrForSerial[i]}
      />
    );

    if ((i + 1) % 8 === 0) {
      if(i<8){
        pages.push(<div className="first">{tempPage}</div>);
        tempPage = [];  
      }
      else{pages.push(tempPage);
        tempPage = [];}
      
    }
  }

  if (tempPage.length > 0) {
    pages.push(tempPage);
  }



  return (
    <div className="App">
      <Input onAdd={saveVar} />
      <button onClick={handlePrint}>Print</button>
      <div className="main" ref={printRef}>
      {pages.map((page, index) => (
          <div key={index} className="page">
            {page}
 x         </div>
        ))}
      </div>
    </div>
  );
}

export default App;
