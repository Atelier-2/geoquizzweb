<template>
  <div class="partie"> 
    <nav-bar></nav-bar>
    <br><br>
    <center>
    <partie-page></partie-page>
    </center>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar.vue';
import PartiePage from '../components/Partie/PartiePage.vue';

export default {
  name: 'Partie',
  components: {
    NavBar,
    PartiePage
  }
}
</script>
