<script>
import axios from 'axios';
import { store } from '../store'
export default {
    name: "SearchBar",
    data() {
        return {
            store
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

                    // store.loadingData = false

                    const datiApi = res.data.results

                    store.arrayFilms = datiApi
                })
        }
    }

}

</script>

<template>
    <!-- <form class="d-flex" role="search"> -->
    <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="store.searchBar">
        <button @click.prevent="$emit('nomeEmit')" class="btn btn-outline-success" type="submit">Search</button>
    </div>
    <!-- </form> -->
</template>

<style lang="scss" scoped></style>
