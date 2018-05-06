import React from 'react'
import Length from '../components/Length'

const LengthCardContainer = ({appState: {uomState}}) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='text-center form-group'><i className='fa fa-exchange fa-3x text-info' /></div>
        <Length.InputForm appState={uomState} />
        <Length.Display appState={uomState} />
      </div>
    </div>
  )
}

export default LengthCardContainer
