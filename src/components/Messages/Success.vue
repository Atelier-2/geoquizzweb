<template>
    <b-modal id="success" title="Message" centered hide-footer>
        <div class="text-center">
            <p>Vous avez reussi a creer une nouvelle partie</p>
            <b-button type="submit" variant="primary" @click="goPartie">Aller a la partie</b-button>
        </div>
    </b-modal>
</template>

<script>
export default {
    name: "Success",
    methods: {
        goPartie() {
            this.$router.push('/partie');
        }
    }    
}
</script>

<style scoped>
p{
    margin-top: 1em;
}
</style>