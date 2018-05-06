import React from 'react'
import { observer } from 'mobx-react'

const CurrencyDisplay = ({appState}) => {
  const style = {
    'paddingTop': '15px',
    'paddingBottom': '15px'
  }
  return (
   <div style={style}>
     { appState.from !== 'USD' && <p>USD: ${!isNaN(appState.usd) && appState.usd}</p> }
     { appState.from !== 'EUR' && <p>EUR: &euro;{!isNaN(appState.eur) && appState.eur}</p> }
     { appState.from !== 'GBP' && <p>GBP: &pound;{!isNaN(appState.gbp) && appState.gbp}</p> }
  </div>
  )
}

export default observer(CurrencyDisplay)
