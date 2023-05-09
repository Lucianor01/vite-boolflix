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
    <div>
        <img src="" alt="">
        <div class="">
            <h1>{{ films.original_title }}</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
