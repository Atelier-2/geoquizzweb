<template>
    <b-modal id="start-game" title="Quel est nom d'utilisateur ?" centered hide-footer>
        <div class="text-center">
            <form-partie></form-partie>
        </div>
    </b-modal>
</template>

<script>
import FormPartie from '../Home/FormPartie';
export default {
    name: "ModalStartGame",
    components: {
        FormPartie
    }
}
</script>

<style scoped>
p{
    margin-top: 1em;
}
</style>