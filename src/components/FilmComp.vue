<script>
import { store } from '../store'

export default {
    name: "FilmComp",
    props: ['info'],
    data() {
        return {
            store,
        }
    },
    methods: {
        getTitle() {
            if (this.info.original_title) {
                return this.info.original_title
            } else {
                return this.info.original_name
            }
        },
        getLanguage() {
            if (this.info.original_language) {
                return this.info.original_language
            } else {
                return this.original_language
            }
        }
    },
}

</script>

<template>
    <div class="col-3 card">
        <img :src="store.pathImg + info.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Titolo: {{ getTitle() }}</h5>
            <h5 class="card-text">Titolo Originale: {{ info.original_title }}</h5>
            <h5>Lingua Originale: {{ getLanguage() }}</h5>
            <h5>Voto: {{ info.vote_average }}</h5>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-img-top {
    height: 440px;
}
</style>
