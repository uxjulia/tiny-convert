import React from 'react'
import UomInputForm from '../components/UomInputForm'
import UomDisplay from '../components/UomDisplay'

const UomCardContainer = ({appState: {uomState}}) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='text-center'><i className='fa fa-balance-scale fa-3x text-info' /></div>
        <UomInputForm appState={uomState} />
        <UomDisplay appState={uomState} />
      </div>
    </div>
  )
}

export default UomCardContainer
