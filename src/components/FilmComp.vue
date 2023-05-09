<script>
import { store } from '../store'

export default {
    name: "FilmComp",
    props: ['films'],
    components: {

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
    <div class="col-3 card">
        <img :src="store.pathImg + films.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Titolo: {{ films.title }}</h5>
            <h5 class="card-text">Titolo Originale: {{ films.original_title }}</h5>
            <h5>Lingua Originale: {{ films.original_language }}</h5>
            <h5>Voto: {{ films.vote_average }}</h5>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-img-top {
    height: 440px;
}
</style>
