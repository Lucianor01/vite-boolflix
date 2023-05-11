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
        getOriginTitle() {
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
        },
        getTitle() {
            if (this.info.title) {
                return this.info.title
            } else {
                return this.info.name
            }
        },
        getImg() {
            if (this.info.poster_path) {
                return store.pathImg + this.info.poster_path
            } else if (this.info.poster_path == null) {
                return '/img/error_404.jpg'
            }
        },
        getVote() {
            return Math.ceil(this.info.vote_average / 2)
        }
    },
}

</script>

<template>
    <div class="col-3 card text-light">
        <img :src="getImg()" class="card-img-top" :alt="getTitle()">
        <div class="card-body">
            <h5 class="card-title">Titolo: {{ getTitle() }}</h5>
            <h5 class="card-text">Titolo Originale: {{ getOriginTitle() }}</h5>
            <h5>Lingua Originale: {{ getLanguage() }}</h5>
            <div class="d-flex align-items-center">
                <h5 class="m-0 me-2">Voto:</h5>
                <i v-for="n in 5" class="fa-star" :class="(n <= getVote()) ? 'fa-solid' : 'fa-regular'"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {

    border: 0;
    background-color: #1b1b1b;

    .card-img-top {
        height: 440px;


    }

}
</style>
