import React from 'react'
import { observer } from 'mobx-react'

const UomDisplay = ({appState}) => {
  return(
    <div>
      { appState.uom !== 'inch' && <p>{appState.inch.toFixed(2)} inch{appState.inch > 1 && 'es'}</p> }
      { appState.uom !== 'mm' && <p>{appState.mm.toFixed(2)} millimeter{appState.mm > 1 && 's'}</p> }
      { appState.uom !== 'cm' && <p>{appState.cm.toFixed(2)} centimeter{appState.cm > 1 && 's'}</p> }
    </div>
    )
}

export default observer(UomDisplay)
