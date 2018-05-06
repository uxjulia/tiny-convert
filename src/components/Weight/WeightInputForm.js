import React from 'react'
import { observer } from 'mobx-react'

const WeightInputForm = ({appState: {weight, value, setValue, handleSelect}}) => {
  return (
    <div className='input-group' id='inputForm-uom'>
      <div className='input-group-btn'>
        <button type='button' className='btn btn-secondary'>{weight}</button>
        <button type='button' className='btn btn-secondary dropdown-toggle dropdown-toggle-split' data-toggle='dropdown'><span className='sr-only'>Toggle Dropdown</span>
        </button>
        <div className='dropdown-menu'>
            <a className='dropdown-item' id='Ounce' onClick={handleSelect}>Ounce</a>
            <a className='dropdown-item' id='Gram' onClick={handleSelect}>Gram</a>
            <a className='dropdown-item' id='Pound' onClick={handleSelect}>Pound</a>
          </div>
      </div>
      <input className='form-control' id='input' onChange={setValue} value={value} />
    </div>
  )
}

export default observer(WeightInputForm)

