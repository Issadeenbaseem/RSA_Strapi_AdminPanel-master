import React, { useState } from "react";
import { DatePicker } from "antd";
import PropTypes from 'prop-types';


import "antd/dist/antd.css";

const AntDatepicker = ({onChange, name, value}) => {
  
  return (
    
    
    <div>
     
     <label>{name}</label>
      <div style={{marginTop: '4px'}}>
      <DatePicker 
       data={value}
       onChange={(event, val) => {
         onChange({ target: { name, value: val } });
       }}
      />
      </div>
      
    </div>
  );
}
AntDatepicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default AntDatepicker
{/* <DatePicker onChange={onChange} /> */}




//import { DatePicker } from "antd";