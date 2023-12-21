import React, { useEffect, useRef } from 'react';
import bwipjs from 'bwip-js';
import './bc.css'

function DataMatrixBarcode (props)  {
  const canvasRef = useRef(null);
  const options ={  bcid: 'datamatrix',
    text: props.data ,
    scale: 3,
    
  }

  useEffect(() => {
    const canvas = canvasRef.current;
     bwipjs.toCanvas(canvas,options);});

  return (
    <div className='canvas'>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default DataMatrixBarcode;
