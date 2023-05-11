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
      //* API FILM
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.laMiaApiKey}&language=it-IT&query=${store.searchBar}`)
        .then((res) => {
          // console.log(res.data).results
          store.arrayFilms = res.data.results
        })

      // API SERIE 
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.laMiaApiKey}&language=it-IT&query=${store.searchBar}`)
        .then((res) => {
          // console.log(res.data.results)
          store.arraySeries = res.data.results
        })

      // API TRENDING SERIE
      axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${store.laMiaApiKey}&language=it&with_networks=213&`)
        .then((res) => {
          console.log(res.data.results)
          store.arraySerieNetflix = res.data.results
        })
    }
  },

}

</script>

<template>
  <nav class="navbar navbar-expand-lg " data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" title="Image from freepnglogos.com">
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" width="200" alt="netflix logo" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Serie TV</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Film</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Originali</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Aggiunti di recente</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">La mia lista</a>
          </li>
        </ul>
        <SearchBar @nomeEmit="filmSerieApi" />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
