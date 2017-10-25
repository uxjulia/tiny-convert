import React from 'react'
import { observer } from 'mobx-react'

const UomInputForm = ({appState: {uom, value, setValue, handleSelect}}) => {
  return (
    <div id='inputForm'>
      <div className='form-group'>
        <label htmlFor='input'>Length</label>
        <input className='form-control' id='input' onChange={setValue} />
      </div>
      <div className='form-group'>
        <label htmlFor='input'>Unit of Measure</label>
        <select className='form-control' id='from' onChange={handleSelect}>
          <option id='inch' value='inch'>Inch (in)</option>
          <option id='mm' value='mm'>Millimeter (mm)</option>
          <option id='cm' value='cm'>Centimeter (cm)</option>
        </select>
      </div>
    </div>
  )
}

export default observer(UomInputForm)
