<template>
    <h1 class="text-center py-5 ">Login</h1>
    <div class="container text-light bg-dark d-flex justify-content-center align-items-center rounded-3 p-5 my-5">

        <h2>Esta es la pagina de login :O</h2>
    </div>
    <div class="container bg-dark rounded-3 p-5 my-5">
        <h1 class="text-center  text-light">Registrate para continuar</h1>
        <button class="btn btn-success w-100" @click="register">Register</button>


    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'LoginPage',
    setup() {

    },
    methods: {
        register() {
            this.$router.push('/RegisterPage')
        }
    }
})
</script>
