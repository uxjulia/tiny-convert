import React from 'react'
import WeightInputForm from '../components/WeightInputForm'
import WeightDisplay from '../components/WeightDisplay'

const WeightCardContainer = ({appState: {weightState}}) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='text-center form-group'>
          <i className='fa fa-balance-scale fa-3x text-warning' />
        </div>
        <div>
          <WeightInputForm appState={weightState} />
          <WeightDisplay appState={weightState} />
        </div>
      </div>
    </div>
  )
}

export default WeightCardContainer
