import React from 'react'
import "./style.css";
import { ArrowDropDown } from '@mui/icons-material';

const SortBuy = () => {
  return (
    <React.Fragment>
      <div className='sort mb-5' style={{ display: 'flex', alignItems: 'center'}}>
        <span>Sort by</span>
        <select style={{ marginLeft: '8px'}}>
          <option value="most-sold">Most Sold</option>
        </select>
        <ArrowDropDown />
        
      </div>
      
    </React.Fragment>
  )
}

export default SortBuy
