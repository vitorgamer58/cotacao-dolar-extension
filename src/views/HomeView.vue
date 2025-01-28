<script lang="ts">
import ExchangeClient from '@/clients/exchange'
import ShowTicker from '@/components/ShowTicker.vue'
import { useRatesStore } from '@/stores/rates'

export default {
  components: {
    ShowTicker
  },
  data() {
    return {
      rates: useRatesStore()
    }
  },
  methods: {
    async fetchUsdt24h() {
      const pair = 'USDTBRL'

      const rateInState = this.rates.getRate(pair)

      if (rateInState) return

      const exchangeClient = new ExchangeClient()

      try {
        const usdt24h = await exchangeClient.get24hSymbol(pair)

        const usdt = {
          tickerName: 'Dólar',
          lastPrice: Number(usdt24h?.lastPrice),
          highPrice: Number(usdt24h?.highPrice),
          lowPrice: Number(usdt24h?.lowPrice)
        }

        this.rates.addRate(pair, usdt)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.fetchUsdt24h()
  }
}
</script>

<template>
  <main class="home">
    <h1>Cotação</h1>
    <ShowTicker v-bind="rates.pairs.USDTBRL" v-if="rates.pairs?.USDTBRL"></ShowTicker>
  </main>
</template>

<style>
.home {
  min-width: 300px;
}
</style>
