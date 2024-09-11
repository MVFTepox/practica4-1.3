<template>
    <div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">+52</span>
            <input type="number" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default" v-model="phoneInput">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, watch } from 'vue'

export default defineComponent({
    name: 'LablePhone',
    props: {
        phone: {
            type: Number,
            required: true
        }
    },
    setup(props, { emit }) {
        // Convertir 'phone' a una referencia reactiva
        const { phone } = toRefs(props);
        const phoneInput = ref(phone.value);

        // Emitir el nuevo valor cuando el input cambia
        watch(phoneInput, (newValue) => {
            emit('update:phone', newValue);
        });

        return {
            phoneInput
        };
    }
});
</script>
