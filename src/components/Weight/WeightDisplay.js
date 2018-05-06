import React from 'react'
import { observer } from 'mobx-react'

const WeightDisplay = ({appState}) => {
  const style = {
    'paddingTop': '15px',
    'paddingBottom': '15px'
  }
  return (
   <div style={style}>
     { appState.weight !== 'Ounce' && <p>{!isNaN(appState.oz) && appState.oz.toFixed(2)} ounce{appState.oz > 1 && 's'}</p> }
     { appState.weight !== 'Gram' && <p>{!isNaN(appState.gram) && appState.gram.toFixed(2)} gram{appState.gram > 1 && 's'}</p> }
     { appState.weight !== 'Pound' && <p>{!isNaN(appState.pound) && appState.pound.toFixed(2)} pound{appState.pound > 1 && 's'}</p> }
  </div>
  )
}

export default observer(WeightDisplay)
