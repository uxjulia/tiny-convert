import React from 'react'
import { observer } from 'mobx-react'
import Currency from '../components/Currency'
import ErrorBoundary from '../ErrorBoundary'

const CurrencyCardContainer = ({appState: {currencyState}}) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='text-center form-group'><i className='fa fa-money fa-3x text-success' /></div>
        <ErrorBoundary>
          <Currency.InputForm appState={currencyState} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Currency.Display appState={currencyState} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default observer(CurrencyCardContainer)
