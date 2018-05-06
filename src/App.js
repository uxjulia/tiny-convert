import React from 'react';
import { observer } from 'mobx-react'
import $ from 'jquery'
import { fx } from 'money'
import CurrencyCardContainer from './containers/CurrencyCardContainer'
import LengthCardContainer from './containers/LengthCardContainer'
import WeightCardContainer from './containers/WeightCardContainer'
import './App.css';
import ErrorBoundary from './ErrorBoundary'

class App extends React.Component {
  getData = () => {
    $.getJSON("https://api.fixer.io/latest?base=USD", (data) => {
      console.log(data)
      fx.rates = data.rates
      fx.base = data.base
      this.props.appState.currencyState.data = data
      return this.props.appState
    })
    setTimeout(this.getData, 60000)
  }
  componentWillMount() {
    this.getData()
  }
  render() {
    const { appState } = this.props
    return(
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <ErrorBoundary>
              <CurrencyCardContainer appState={appState} />
            </ErrorBoundary>
          </div>
          <div className='col'>
            <LengthCardContainer appState={appState} />
          </div>
          <div className='col'>
            <WeightCardContainer appState={appState} />
          </div>
        </div>
      </div>
    )
  }
}

export default observer(App)
