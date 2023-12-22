import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import BarcodeGenerator from "./barcode";


const ComponentToPrint = (props) => {
  return (
    <div>
             <BarcodeGenerator details={props.d}  />
    </div>
  );
};

export default ComponentToPrint;
