<script>
import { store } from '../store'
import FilmComp from './FilmComp.vue';
import OriginaliNetflix from './OriginaliNetflix.vue';
export default {
    name: "MainComp",
    components: {
        FilmComp,
        OriginaliNetflix
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        scrollOrizzontale(e, elementHtml) {

            const container = document.getElementById(elementHtml)

            if (e.deltaY > 0) {
                container.scrollLeft += 100
            } else {
                container.scrollLeft -= 100
            }

        }
    },
}

</script>

<template>
    <div class="container mb-5">
        <div>
            <h2 class="mb-4">Popolari su Netflix</h2>
        </div>
        <div @wheel.prevent="scrollOrizzontale($event, 'container-netflix')" id="container-netflix"
            class="row flex-nowrap overflow-auto">
            <OriginaliNetflix v-for="(netflix, index) in store.arraySerieNetflix" :key="index" :infoNetflix="netflix" />
        </div>
    </div>
    <div class="container">
        <div class="row mb-5" v-if="store.arrayFilms.length">
            <h2 class="mb-4">FILM</h2>
            <FilmComp v-for="(film, index) in store.arrayFilms" :key="index" :info="film" />
        </div>
        <div class="row" v-if="store.arraySeries.length">
            <h2 class="mb-4">SERIE TV</h2>
            <FilmComp v-for="(serie, index) in store.arraySeries" :key="index" :info="serie" />
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
