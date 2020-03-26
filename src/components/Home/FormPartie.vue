<template>
    <div>
        <b-form>
            
            <b-form-group id="input-group-1" label="Nom d'utilisateur" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.joueur"
                  required
                  placeholder="Inserer votre nom d'utilisateur"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" @click="creerPartie">Creer partie</b-button>

        </b-form>
    </div>
</template>

<script>

export default {
    name: 'FormPartie',
    data() {
      return {
        form: {
          nb_photos: 10,
          status: 'creee',
          score: 0,
          joueur: '',
          id_serie: 1
        },
        id: null,
        token: null
      }
    },
    methods: {
        creerPartie() {
          axios.post('/parties', {
              nb_photos: this.form.nb_photos,
              status: this.form.status,
              score: this.form.score,
              joueur: this.form.joueur,
              id_serie: this.form.id_serie                
          }).then((response) => {
              this.$store.commit('setSession', response.data);
              this.getSeriePhotos();
          }).catch(
              error => console.log(error)
          );
        },
        getParties() {
          axios.get('/parties?token='+this.token)
          .then((response) => {
              console.log(response.data);
          }).catch(
              error => console.log(error)
          );
        },
        getSeriePhotos() {
          axios.get('/serie/'+this.form.id_serie+'/photos?token='+this.$store.state.token)
          .then((response) => {
            this.$store.commit('setPhotos', response.data);
          }).catch(
            error => console.log(error)
          );
        }
    }
  }
</script>