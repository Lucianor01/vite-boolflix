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
    <div class="container">
        <div class="row">
            <FilmComp v-for="(film, index) in store.arrayFilms" :key="index" :films="film" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
