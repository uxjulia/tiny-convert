import React from 'react'
import { observer } from 'mobx-react'

const UomDisplay = ({appState}) => {
  const style = {
    'paddingTop': '15px',
    'paddingBottom': '15px'
  }
  return(
    <div style={style}>
      { appState.uom !== 'Inch' && <p>{appState.inch.toFixed(2)} inch{appState.inch > 1 && 'es'}</p> }
      { appState.uom !== 'MM' && <p>{appState.mm.toFixed(2)} millimeter{appState.mm > 1 && 's'}</p> }
      { appState.uom !== 'CM' && <p>{appState.cm.toFixed(2)} centimeter{appState.cm > 1 && 's'}</p> }
    </div>
    )
}

export default observer(UomDisplay)
