<script>
import { store } from './store'
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'

export default {
  name: "App",
  components: {
    HeaderComp,
    MainComp,
  },
  data() {
    return {
      store
    }
  },

}
</script>

<template>
  <header>
    <HeaderComp />
  </header>
  <main>
    <MainComp />
  </main>
</template>

<style lang="scss">
@use './style/main.scss'
</style>
