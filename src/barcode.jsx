import React from "react";
// import bwipjs from 'bwip-js';
import Barcode from "react-barcode";
import DataMatrixBarcode from "./datamatrix";
import "../src/bc.css";

function BarcodeGenerator(props) {
  var var_serial = 123456;

  let arr = [
    "Supplier code (V) 926837",
    "Serial (S) " + var_serial.toString(),
    "Part no (P) 600574200A",
    "Quantity (Q) 675",
    "BG431938R (H)Batch",
  ];

  const gs = String.fromCharCode(29);
  
    const gsSeparator = String.fromCharCode(29);
    const rs = String.fromCharCode(30);
    const eot = String.fromCharCode(4);
    const barcodeData = `[)>${rs}06${gsSeparator}12SB${gsSeparator}16S2${gsSeparator}V926837${gsSeparator}S${props.serialNum.toString()}${gsSeparator}P600574200A${gsSeparator}1PA01${gsSeparator}Q675${gsSeparator}3QPCE${gsSeparator}HBG431938R${gsSeparator}5D230916011${rs}${eot}`;

    return (
      <div className="bigcon">
        <h2>NHB-BALL, 396325, Antalia- Bilimora</h2>
        <div className="container">
          <div className="bc">
            <Barcode
              value={arr[0]}
              width={1.8}
              height={32}
              textPosition="top"
              textAlign="left"
              fontSize={30}
            />
            <br />
            <Barcode
              value={props.serialNum.toString()}
              width={1.8}
              height={32}
              textPosition="top"
              textAlign="left"
              
            />
            <br />
            <Barcode
              value={arr[2]}
              width={1.8}
              height={32}
              textPosition="top"
              textAlign="left"
            />
            <br />
            <Barcode
              value={arr[3]}
              width={1.8}
              height={32}
              textPosition="top"
              textAlign="left"
            />
            <br />
            <Barcode
              value={props.details}
              width={1.8}
              height={32}
              textPosition="top"
              textAlign="left"
            />
          </div>
          <div className="dm">
            <DataMatrixBarcode data={barcodeData} padding={12} />
            <h2>INDIA</h2>
            <h2 className="in">IN</h2>

            <h2>MADE</h2>
          </div>
        </div>
      </div>
    );
  
}

export default BarcodeGenerator;
