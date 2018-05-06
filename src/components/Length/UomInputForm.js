import React from 'react'
import { observer } from 'mobx-react'

const UomInputForm = ({appState: {uom, value, setValue, handleSelect}}) => {
  return (
    <div className='input-group' id='inputForm-uom'>
      <div className='input-group-btn'>
        <button type='button' className='btn btn-secondary'>{uom}</button>
        <button type='button' className='btn btn-secondary dropdown-toggle dropdown-toggle-split' data-toggle='dropdown'><span className='sr-only'>Toggle Dropdown</span>
        </button>
        <div className='dropdown-menu'>
            <a className='dropdown-item' id='Inch' onClick={handleSelect}>Inch</a>
            <a className='dropdown-item' id='MM' onClick={handleSelect}>MM</a>
            <a className='dropdown-item' id='CM' onClick={handleSelect}>CM</a>
          </div>
      </div>
      <input className='form-control' id='input' onChange={setValue} value={value} />
    </div>
  )
}

export default observer(UomInputForm)

