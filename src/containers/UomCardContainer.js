import React from 'react'
import UomInputForm from '../components/UomInputForm'
import UomDisplay from '../components/UomDisplay'

const UomCardContainer = ({appState: {uomState}}) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='text-center form-group'><i className='fa fa-exchange fa-3x text-info' /></div>
        <UomInputForm appState={uomState} />
        <UomDisplay appState={uomState} />
      </div>
    </div>
  )
}

export default UomCardContainer
