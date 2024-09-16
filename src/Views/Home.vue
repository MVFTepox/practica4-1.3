<template>
    <div class="container bg-dark d-flex justify-content-center align-items-center rounded-3 p-5 my-5">
        <h1 class="text-center py-5 text-light">Pagina principal :3</h1>
    </div>
    <div class="container bg-dark d-flex justify-content-center align-items-center rounded-3 p-5 my-5">
        <button class="btn btn-success w-50" @click="BorrarLocalStorage">Delete LocalStorage</button>
    </div>


</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Home',
    setup() {

    },
    methods: {
        BorrarLocalStorage() {
            localStorage.clear();
        }
    }
})
</script>
