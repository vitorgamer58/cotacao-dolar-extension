<script lang="ts">
import ShowTicker from '@/components/ShowTicker.vue'
import { useRatesStore } from '@/stores/rates'

export default {
  components: {
    ShowTicker
  },
  computed: {
    ratesStore() {
      return useRatesStore()
    }
  },
  mounted() {
    this.ratesStore.startAutoFetch()
  },
  beforeUnmount() {
    this.ratesStore.stopAutoFetch()
  }
}
</script>

<template>
  <main class="home">
    <h1>Cotação</h1>
    <ShowTicker v-bind="ratesStore.pairs.USDTBRL" v-if="ratesStore.pairs?.USDTBRL"></ShowTicker>
  </main>
</template>

<style>
.home {
  min-width: 300px;
}
</style>
