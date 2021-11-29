import React, { useState } from "react";
import { DatePicker } from "antd";
import PropTypes from 'prop-types';
import moment from 'moment';


import "antd/dist/antd.css";

const AntDatepicker = ({onChange, name, value}) => {
  
  return (
    
    
    <div>
     
     <label>{name}</label>
      <div style={{marginTop: '4px' }}>
      <DatePicker 
       data={value}
       style={{ width: 250 }}
       value={value ? moment(value, 'YYYY-MM-DD') : null}
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