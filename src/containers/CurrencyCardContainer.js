import React from 'react'
import { observer } from 'mobx-react'
import CurrencyInputForm from '../components/CurrencyInputForm'
import CurrencyDisplay from '../components/CurrencyDisplay'
import ErrorBoundary from '../ErrorBoundary'

const CurrencyCardContainer = ({appState: {currencyState}}) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='text-center'><i className='fa fa-money fa-3x text-success' /></div>
        <ErrorBoundary>
          <CurrencyInputForm appState={currencyState} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CurrencyDisplay appState={currencyState} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default observer(CurrencyCardContainer)
