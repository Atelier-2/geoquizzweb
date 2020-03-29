<template>
    <div class="HomePage">
        <div class="content">
            <div>
                <h1>GEOQUIZZ PLAYER</h1><br>
                <button type="button" class="btn btn-primary" @click="startGame">Jouer</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomePage",
    methods: {
        startGame() {
            this.$bvModal.show('start-game');
        }
    }
}
</script>

<style  lang="scss"> 
    body {
        //background-image: url("https://i.pinimg.com/originals/9d/eb/08/9deb08cbac490f5fa43032499f61c581.jpg");
        width: 100%;
        height: 90vh;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }
    .content {
        margin-top: 40vh;
        text-align: center;
        color: #17a2b8;
        div {
            display: inline-block;
            text-align: center;
        }
    }
    @media (max-width: 980px) {
        .content {
            padding-right: 0px;
            div {
                display: block;
                text-align: center;
            }
        }
    }
</style>