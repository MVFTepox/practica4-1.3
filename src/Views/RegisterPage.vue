<template>
    <div>
        <h1 class="text-center py-5 ">Registro de usuario</h1>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <div class="card">
                    <div class="card-title text-center py-3 display-6"
                        style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Registros
                    </div>
                    <div class="card-body">
                        <div class="d-flex gap-3">
                            <div class="mb-3">
                                <label for="nameInput" class="form-label">Name</label>
                                <input type="text" class="form-control" id="nameInput" v-model="name">
                            </div>

                            <div class="mb-3">
                                <label for="lastNameInput" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lastNameInput" v-model="lastName">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="usernameInput" class="form-label">Username</label>
                            <input type="text" class="form-control" id="usernameInput" v-model="username">
                        </div>
                        <div class="mb-3">
                            <label for="emailInput" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="emailInput"
                                placeholder="pJbQ5@example.com" v-model="email">
                        </div>
                        <div class="mb-3">
                            <label for="phoneInput" class="form-label">Phone</label>
                            <lable-phone v-model:phone="phone" />
                        </div>
                        <div class="mb-3">
                            <label for="passwordInput" class="form-label">Password</label>
                            <input type="password" class="form-control" id="passwordInput"
                                placeholder="*******" v-model="password">
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-success w-100" @click="register">Registrarse</button>
                    </div>
                </div>
            </div>
            <div class="col-3"></div>
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import LablePhone from '../components/LablePhone.vue'
import router from '../router/Router';

export default defineComponent({
    name: 'RegisterPage',
    components: {
        LablePhone
    },

    setup() {
        const name = ref('');
        const lastName = ref('');
        const username = ref('');
        const email = ref('');
        const phone = ref(0);
        const password = ref('');

        function clearregister() {
            name.value = '';
            lastName.value = '';
            username.value = '';
            email.value = '';
            phone.value = 0;
            password.value = '';


        }

        // Función para el registro
        const register = () => {
            console.log({
                name: name.value,
                lastName: lastName.value,
                username: username.value,
                email: email.value,
                phone: phone.value,
                password: password.value
            });

            alert('Registro exitoso');

            clearregister();

            router.push( '/' )
        

        };

        // Computed para construir el usuario
        const user = computed(() => ({
            name: name.value,
            lastName: lastName.value,
            username: username.value,
            email: email.value,
            phone: phone.value,
            password: password.value
        }));

        // Computed para generar el email automáticamente
        const generatedEmail = computed(() => {
            return `${name.value}.${lastName.value}@gmail.com`;
        });

        localStorage.setItem('user', JSON.stringify(user.value));
        

        // Retornar valores y funciones a la plantilla
        return {
            name,
            lastName,
            username,
            email,
            phone,
            password,
            register,
            user,
            generatedEmail
        };
    }
});
</script>

