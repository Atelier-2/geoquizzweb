<template>
<div class="PartiePage">
    <!-- CSS CDN MAPA -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin=""/>
    
    <div class="container">
        <div class="row">
        <div class="col col-12"  style="border: 1px solid blue;">
            <div class="card-body">
                <h5 class="card-title">Instructions</h5>
                <p class="card-text">Cliquez en ordre des images sur la carte où vous pensez qui se trouvent les lieux suivants.</p>
                <p class="card-text">Après cliquez finaliser.</p>
                <a href="#" class="btn btn-primary">Finaliser</a>
            </div>
            <br>
            <ul class="row">
                <li v-for="(item, index) in $store.state.photos.photos" style="padding: 1%;">
                    <div class="card" style="width: 12rem;">
                        <img class="card-img-top" v-bind:src=" item.url " alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Cette image est le nombre :</h5>
                            <p class="card-text"><strong>{{index+1}}</strong></p>
                        </div>
                    </div>                    
                    <br>
                </li>
            </ul>
            <br>
            <div id="myMap" style="height: 600px; border: 2px solid red;"></div>
        </div>
        </div>

    </div>
</div>    
</template>
<script>
export default {
    name: 'PartiePage',
    components: {
        
    }
    
}
</script>
<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>