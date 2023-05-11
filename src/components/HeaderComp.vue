<script>
import axios from 'axios';
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
  created() {
    this.filmSerieApi
  },
  methods: {
    filmSerieApi() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.laMiaApiKey}&language=it-IT&query=${store.searchBar}`)
        .then((res) => {
          console.log(res.data)
          store.arrayFilms = res.data.results
        })

      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.laMiaApiKey}&language=it-IT&query=${store.searchBar}`)
        .then((res) => {
          console.log(res.data.results)
          store.arraySeries = res.data.results
        })
    },
  }
}

</script>

<template>
  <nav class="navbar bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <SearchBar @nomeEmit="filmSerieApi" />
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
