<script>
import { store } from '../store'
import FilmComp from './FilmComp.vue';
export default {
    name: "MainComp",
    components: {
        FilmComp
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
    <FilmComp v-for="(film, index) in store.arrayFilms" :key="index" :films="film" />
</template>

<style lang="scss" scoped></style>
