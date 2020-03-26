<template>
  <div class="home"> 
     <nav-bar></nav-bar>
     <home-page></home-page>
     <modal-start-game></modal-start-game>
     <success></success>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '../components/Home/HomePage.vue';
import NavBar from '../components/NavBar.vue';
import ModalStartGame from "../components/Home/ModalStartGame";
import Success from '../components/Messages/Success';

export default {
  name: 'Home',
  components: {
    HomePage,
    NavBar,
    ModalStartGame,
    Success
  }
}
</script>
