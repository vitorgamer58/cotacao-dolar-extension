import type { ITickerExchange } from '@/interfaces/IExchange'
import axios, { type AxiosInstance } from 'axios'

class ExchangeClient {
  private _axios: AxiosInstance
  constructor() {
    this._axios = axios.create({
      baseURL: 'https://data-api.binance.vision/api/v3'
    })
  }

  async get24hSymbol(symbol: string) {
    return await this._axios
      .get<ITickerExchange>('/ticker/24hr', {
        params: {
          symbol
        }
      })
      .then(({ data }) => data)
      .catch((error) => {
        console.log(error)
        throw error
      })
  }
}

export default ExchangeClient
