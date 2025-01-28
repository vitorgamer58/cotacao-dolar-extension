import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ShowTicker from '../ShowTicker.vue'

describe('ShowTicker', () => {
  const defaultProps = {
    tickerName: 'Dólar',
    lastPrice: 1.9999,
    highPrice: 2.0095,
    lowPrice: 1.00499
  }

  it('renders properly', () => {
    const wrapper = mount(ShowTicker, { props: defaultProps })
    expect(wrapper.text()).toContain(defaultProps.tickerName)
    expect(wrapper.text()).toContain(`R$ 2,00`)
  })
})
