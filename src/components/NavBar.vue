<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">
            <b-navbar-brand href="#">GeoQuizz Player</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item><b-link href="/"><strong>Accueil</strong></b-link></b-nav-item>
                    <b-nav-item><b-link href="/rules"><strong>Regles</strong></b-link></b-nav-item>
                    <b-nav-item><b-link href="/about"><strong>About</strong></b-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
a {
    color: white !important;
    text-decoration-style: none !important;
    text-decoration: none !important;
}
a:hover {
    background-color: teal;
}
</style>