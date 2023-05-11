<script>
import axios from 'axios';
import { store } from '../store'

export default {
    name: "OriginaliNetflix",
    props: ['infoNetflix'],
    data() {
        return {
            store
        }
    },
    created() {
        this.apia
    },
    computed: {
        apia() {
            axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${store.laMiaApiKey}&language=it&with_networks=213&`)
                .then((res) => {
                    console.log(res.data.results)
                    store.arraySerieNetflix = res.data.results
                })
        }
    },
    methods: {
        getVote() {
            return Math.ceil(this.infoNetflix.vote_average / 2)
        }
    }

}

</script>

<template>
    <div class="col-3 card mx-2 px-0 text-light">
        <img :src="store.pathImg + infoNetflix.poster_path" class="card-img-top" :alt="infoNetflix.name">
        <div class="card-body position-absolute p-0">
            <h5 class="card-title">Titolo: {{ infoNetflix.name }}</h5>
            <h5 class="card-text">Titolo Originale: {{ infoNetflix.original_name }}</h5>
            <h5>Lingua Originale: {{ infoNetflix.original_language }}</h5>
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

    &:hover {
        cursor: pointer;
        filter: brightness(100%);

        .card-img-top {
            filter: brightness(0%);
        }

        .card-body {
            display: block;
            cursor: pointer;
            z-index: 3;
        }
    }

    .card-img-top {
        transition: filter 0.3s ease-in-out;
    }

    .card-body {
        top: 50px;
        left: 10px;
        display: none;
    }
}
</style>
