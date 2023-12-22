import React from "react";
// import bwipjs from 'bwip-js';
import Barcode from "react-barcode";
import DataMatrixBarcode from "./datamatrix";
import "../src/bc.css";
import "../src/App.css"

function BarcodeGenerator(props) {
  

  let arr = [
    "V926837",
    "Serial (S) ",
    "P600574200A",
    "Q675",
    "BG431938R (H)Batch",
  ];
  let txt = [
    "Supplier code (V) 926837",
    "Serial (S) ",
    "Part no (P) 600574200A",
    "Quantity (Q) 675",
    "BG431938R (H)Batch",
  ];

 
  
    const gsSeparator = String.fromCharCode(29);
    const rs = String.fromCharCode(30);
    const eot = String.fromCharCode(4);
    const barcodeData = `[)>${rs}06${gsSeparator}12SB${gsSeparator}16S2${gsSeparator}V926837${gsSeparator}S${props.serialNum.toString()}${gsSeparator}P600574200A${gsSeparator}1PA01${gsSeparator}Q675${gsSeparator}3QPCE${gsSeparator}HBG431938R${gsSeparator}5D230916011${rs}${eot}`;

    return (
      <div className="container">
      <h2 className="nhb">NHB-BALL, 396325, Antalia- Bilimora</h2>
      <div className="forDm">
        <div className="bc">
          <Barcode
            value={arr[0]}
            width={2.2}
            height={40}
            textPosition="top"
            textAlign="left"
            fontSize={25}
            margin={0}
            marginLeft={20}
            text={txt[0]}
            format={'CODE39'}
          />
          <br />
          <Barcode
            value={'S'+props.serialNum.toString()}
             width={2.2}
            height={40}
            textPosition="top"
            textAlign="left"
            fontSize={25}
            margin={0}
            marginLeft={20}
            text={'Serial (S) '+props.serialNum.toString()}
            format={'CODE39'}
            
          />
          <br />
          <Barcode
            value={arr[2]}
            width={2.2}
            height={40}
            textPosition="top"
            textAlign="left"
            fontSize={25}
            margin={0}
            marginLeft={20}
            text={txt[2]}
            format={'CODE39'}
          />
          <br />
          <Barcode
            value={arr[3]}
            width={2.2}
            height={40}
            textPosition="top"
            textAlign="left"
            fontSize={25}
            margin={0}
            marginLeft={20}
            text={txt[3]}
            format={'CODE39'}
          />
          <br />
          <Barcode
            value={'H'+props.details}
            width={2.2}
            height={40}
            textPosition="top"
            textAlign="left"
            fontSize={25}
            margin={0}
            marginLeft={20}
            text={'Batch (H) '+props.details}
            format={'CODE39'}
            
          />
        </div>
        <div className="dm" >
        <h2 className="in">MADE IN INDIA</h2>
          <DataMatrixBarcode  data={barcodeData} padding={12} />
         
          

         
        </div>
      </div>
    </div>
      
    );
  
}

export default BarcodeGenerator;
