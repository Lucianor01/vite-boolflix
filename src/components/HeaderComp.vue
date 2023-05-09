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
    this.filmApi
  },
  computed: {
    filmApi() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=71aa9f50b1baf0436eca08c94d26bfd2&language=it-IT&query=${store.searchBar}&page=1&include_adult=false`)
        .then((res) => {
          console.log(res.data.results)
          console.log(store.searchBar)
          // store.loadingData = false

          const datiApi = res.data.results

          store.arrayFilms = datiApi
        })
    }
  }
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
