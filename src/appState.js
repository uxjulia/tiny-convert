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
  value: '',
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
    currencyState.value = e.target.value
    return currencyState.value
  }),
  handleSelect: action('set currency', (e) => {
    currencyState.from = e.target.id
    return currencyState.from
  })
})

const uomState = observable({
  value: '',
  uom: 'Inch',
  inch: computed(() => {
    let m
    switch (uomState.uom) {
      case 'MM': m = 0.03937008
        break
      case 'CM': m = 0.39370079
        break
      case 'Inch': m = 1
        break
      default: m = 0
    }
    return uomState.value * m
  }),
  mm: computed(() => {
    let m
    switch (uomState.uom) {
      case 'MM': m = 1
        break
      case 'CM': m = 10
        break
      case 'Inch': m = 25.4
        break
      default: m = 0
    }
    return uomState.value * m
  }),
  cm: computed(() => {
    let m
    switch (uomState.uom) {
      case 'MM': m = 0.1
        break
      case 'CM': m = 1
        break
      case 'Inch': m = 2.54
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
    uomState.uom = e.target.id
    return uomState.uom
  })
})

const weightState = observable({
  value: '',
  weight: 'Ounce',
  oz: computed(() => {
    let m
    switch (weightState.weight) {
      case 'Ounce': m = 1
        break
      case 'Gram': m = 0.03527396
        break
      case 'Pound': m = 16
        break
      default: m = 0
    }
    return weightState.value * m
  }),
  gram: computed(() => {
    let m
    switch (weightState.weight) {
      case 'Ounce': m = 28.3495231
        break
      case 'Gram': m = 1
        break
      case 'Pound': m = 453.59237
        break
      default: m = 0
    }
    return weightState.value * m
  }),
  pound: computed(() => {
    let m
    switch (weightState.weight) {
      case 'Ounce': m = 0.0625
        break
      case 'Gram': m = 0.00220462
        break
      case 'Pound': m = 1
        break
      default: m = 0
    }
    return weightState.value * m
  }),
  setValue: action('set weight input value', (e) => {
    weightState.value = e.target.value
    return weightState.value
  }),
  handleSelect: action('set weight', (e) => {
    weightState.weight = e.target.id
    return weightState.weight
  })
})

export const appState = observable({
  currencyState: currencyState,
  uomState: uomState,
  weightState: weightState
})

