import React from 'react'
import { observer } from 'mobx-react'

const CurrencyInputForm = ({appState: {symbol, value, setValue, handleSelect}}) => {
  const display = symbol.concat(value)
  return (
      <div>
        <div id='inputForm'>
          <div className='form-group'>
            <label htmlFor='input'>Value</label>
            <input className='form-control' id='input' onChange={setValue} value={display} />
          </div>
          <div className='form-group'>
            <label htmlFor='input'>Currency</label>
            <select className='form-control' id='from' onChange={handleSelect}>
              <option id='USD' value='USD'>USD ($)</option>
              <option id='EUR' value='EUR'>EUR (&euro;)</option>
              <option id='GBP' value='GBP'>GBP (&pound;)</option>
            </select>
          </div>
        </div>
      </div>
  )
}

export default observer(CurrencyInputForm)
