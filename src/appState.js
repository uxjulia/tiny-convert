import { observable, computed, action } from 'mobx'
import { fx } from 'money'
import $ from 'jquery'

const symbol = {
  USD: '$',
  EUR: '&euro;',
  GBP: '&pound;'
}

const currencyState = observable({
  from: 'USD',
  symbol: computed(() => {
    return symbol[currencyState.from]
  }),
  data: null,
  getData: function() {
    $.getJSON("https://api.fixer.io/latest", (data) => {
      currencyState.setFx(data)
      currencyState.data = data
      return currencyState.data
    })
    setTimeout(currencyState.getData, 30000)
  },
  setFx: function(data) {
    fx.rates = data.rates
    fx.base = data.base
  },
  value: 0,
  eur: computed(() => {
    if (currencyState.data) {
      const val = currencyState.value
      const from = currencyState.from
      return fx(val).from(from).to('EUR').toFixed(2)
    }
  }),
  gbp: computed(() => {
    if (currencyState.data) {
      const val = currencyState.value
      const from = currencyState.from
      return fx(val).from(from).to('GBP').toFixed(2)
    }
  }),
  usd: computed(() => {
    if (currencyState.data) {
      const val = currencyState.value
      const from = currencyState.from
      return fx(val).from(from).to('USD').toFixed(2)
    }
  }),
  setValue: action('convert', (e) => {
    currencyState.value = e.target.value.slice(1)
    return currencyState.value
  }),
  handleSelect: action('set currency', (e) => {
    currencyState.from = e.target.value
    return currencyState.from
  })
})

const uomState = observable({
  value: 0,
  uom: 'inch',
  inch: computed(() => {
    let m
    switch (uomState.uom) {
      case 'mm': m = 0.03937008
        break
      case 'cm': m = 0.39370079
        break
      case 'inch': m = 1
        break
      default: m = 0
    }
    return uomState.value * m
  }),
  mm: computed(() => {
    let m
    switch (uomState.uom) {
      case 'mm': m = 1
        break
      case 'cm': m = 10
        break
      case 'inch': m = 25.4
        break
      default: m = 0
    }
    return uomState.value * m
  }),
  cm: computed(() => {
    let m
    switch (uomState.uom) {
      case 'mm': m = 0.1
        break
      case 'cm': m = 1
        break
      case 'inch': m = 2.54
        break
      default: m = 0
    }
    return uomState.value * m
  }),
  setValue: action('set uom input value', (e) => {
    uomState.value = e.target.value
    return uomState.value
  }),
  handleSelect: action('set unit of measure', (e) => {
    uomState.uom = e.target.value
    return uomState.uom
  })
})

export const appState = observable({
  currencyState: currencyState,
  uomState: uomState
})

