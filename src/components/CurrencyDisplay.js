import React from 'react'
import { observer } from 'mobx-react'

const CurrencyDisplay = ({appState}) => {
  return (
   <div>
     { appState.from !== 'USD' && <p>USD: ${appState.usd}</p> }
     { appState.from !== 'EUR' && <p>EUR: &euro;{appState.eur}</p> }
     { appState.from !== 'GBP' && <p>GBP: &pound;{appState.gbp}</p> }
  </div>
  )
}

export default observer(CurrencyDisplay)
