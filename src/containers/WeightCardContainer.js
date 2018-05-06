import React from 'react'
import Weight from '../components/Weight/'

const WeightCardContainer = ({appState: {weightState}}) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='text-center form-group'>
          <i className='fa fa-balance-scale fa-3x text-warning' />
        </div>
        <div>
          <Weight.InputForm appState={weightState} />
          <Weight.Display appState={weightState} />
        </div>
      </div>
    </div>
  )
}

export default WeightCardContainer
