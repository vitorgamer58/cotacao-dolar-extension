import { defineStore } from 'pinia'
import type { IPair } from '@/interfaces/Interfaces'

interface IState {
  pairs: { [key: string]: IPair };
}

const fiveMinutesInMs = 5 * 60 * 1000

export const useRatesStore = defineStore(
  'rates',
  {
    state: (): IState => ({
      pairs: {}
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
      addRate(key: string, value: IPair | undefined) {
        if(value == undefined) return
        this.pairs[key] = { ...value, timestamp: Date.now() }
      }
    }
  }
)
