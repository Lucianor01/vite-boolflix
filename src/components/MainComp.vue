<script>
import { store } from '../store'
import FilmComp from './FilmComp.vue';
export default {
    name: "MainComp",
    components: {
        FilmComp,
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
    <div class="container">
        <div class="row" v-if="store.arrayFilms.length">
            <h2>Film</h2>
            <FilmComp v-for="(film, index) in store.arrayFilms" :key="index" :info="film" />
        </div>
        <div class="row" v-if="store.arraySeries.length">
            <h2>Serie</h2>
            <FilmComp v-for="(serie, index) in store.arraySeries" :key="index" :info="serie" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
