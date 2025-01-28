<script lang="ts">
export default {
  props: {
    tickerName: String,
    lastPrice: Number,
    highPrice: Number,
    lowPrice: Number,
    priceChange: Number,
    timestamp: Number
  },
  computed: {
    getFormattedDate() {
      const date = new Date(this.timestamp ?? 0)

      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')

      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
    }
  }
}
</script>

<template>
  <h2>{{ tickerName }}</h2>
  <p>
    R$
    {{
      lastPrice?.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }}
  </p>
  <p>
    Máxima: R$
    {{
      highPrice?.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }}
  </p>
  <p>
    Mínima: R$
    {{
      lowPrice?.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    }}
  </p>
  <p>Última atualização: {{ getFormattedDate }}</p>
</template>
