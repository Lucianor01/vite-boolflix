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

}

</script>

<template>
    <form class="d-flex" role="search">
        <div class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Cerca" aria-label="Search"
                v-model="store.searchBar">
            <button @click.prevent="$emit('nomeEmit')" class="btn btn-outline-success" type="submit">Search</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
