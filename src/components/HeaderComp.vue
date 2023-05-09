<script>
import { store } from '../store'
import SearchBar from './SearchBar.vue';
export default {
  name: "HeaderComp",
  components: {
    SearchBar

  },
  data() {
    return {
      store,
    }
  },
  methods: {

  },
}

</script>

<template>
  <nav class="navbar bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <SearchBar @nomeEmit="filmApi" />
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
