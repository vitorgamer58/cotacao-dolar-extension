import { defineStore } from 'pinia'
import type { IPair } from '@/interfaces/Interfaces'
import ExchangeClient from '@/clients/exchange'

const fiveMinutesInMs = 5 * 60 * 1000

export const useRatesStore = defineStore('rates', {
  state: () => ({
    pairs: {} as Record<string, IPair>,
    intervalId: undefined as ReturnType<typeof setInterval> | undefined
  }),
  getters: {
    getRate(state) {
      return (key: string) => {
        const rate = state?.pairs[key]

        if (!rate) return undefined

        if (rate.timestamp && Date.now() - rate.timestamp > fiveMinutesInMs) {
          return undefined
        }

        return rate
      }
    }
  },
  actions: {
    async fetchUsdt24h() {
      const pair = 'USDTBRL'

      if (this.getRate(pair)) return

      const exchangeClient = new ExchangeClient()

      try {
        const usdt24h = await exchangeClient.get24hSymbol(pair)

        this.pairs[pair] = {
          tickerName: 'Dólar',
          lastPrice: Number(usdt24h.lastPrice),
          highPrice: Number(usdt24h.highPrice),
          lowPrice: Number(usdt24h.lowPrice),
          priceChangePercent: Number(usdt24h.priceChangePercent),
          timestamp: Date.now()
        }
      } catch (error) {
        console.error('Erro ao buscar taxa:', error)
      }
    },

    startAutoFetch() {
      this.fetchUsdt24h()
      if (this.intervalId) clearInterval(this.intervalId)

      this.intervalId = setInterval(() => {
        this.fetchUsdt24h()
      }, 3000)
    },

    stopAutoFetch() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = undefined
      }
    }
  },
  persist: true
})
