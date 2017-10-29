import React from 'react'
import { observer } from 'mobx-react'

function insertSymbol(value) {
  return {__html: value}
}
const CurrencyInputForm = ({appState: {symbol, value, setValue, handleSelect}}) => {
  return (
      <div className='input-group' id='inputForm'>
        <div className='input-group-btn'>
          <button type='button' className='btn btn-secondary'><span dangerouslySetInnerHTML={insertSymbol(symbol)} /></button>
          <button type='button' className='btn btn-secondary dropdown-toggle dropdown-toggle-split' data-toggle='dropdown'>
            <span className='sr-only'>Toggle Dropdown</span>
          </button>
          <div className='dropdown-menu'>
            <a className='dropdown-item' id='USD' value='USD' onClick={handleSelect}>USD ($)</a>
            <a className='dropdown-item' id='GBP' value='GBP' onClick={handleSelect}>GBP (&pound;)</a>
            <a className='dropdown-item' id='EUR' value='EUR' onClick={handleSelect}>EURO (&euro;)</a>
          </div>
        </div>
        <input className='form-control' id='input' onChange={setValue} placeholder="0.00" value={value} />
      </div>
  )
}

export default observer(CurrencyInputForm)
