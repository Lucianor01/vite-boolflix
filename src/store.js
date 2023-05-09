import { reactive } from "vue";

export const store = reactive(
    {

        laMiaApiKey: 'https://api.themoviedb.org/3/movie/550?api_key=71aa9f50b1baf0436eca08c94d26bfd2&language=it',
        arrayFilms: [],
        searchBar: ''
    }
)