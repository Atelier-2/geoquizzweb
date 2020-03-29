const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'


let myMap = L.map('myMap').setView([48.6939, 6.1834], 13)

//Mapa
L.tileLayer(tilesProvider,{
    maxZoom: 18
}).addTo(myMap)

//Marcadores
/*let marker = L.marker([48.6939, 6.1834]).addTo(myMap)
let marker2 = L.marker([48.684, 6.15692]).addTo(myMap)
let marker3 = L.marker([48.68963, 6.1744]).addTo(myMap)*/

let counter = 1;
let endroitsChoisis = [];
let endroitsPhotos = [];

//Doble clic en el mapa
myMap.on('dblclick', e => {
    let latLng = myMap.mouseEventToLatLng(e.originalEvent)
    endroitsChoisis.push(latLng)
    L.marker([latLng.lat, latLng.lng], {title : counter++}).addTo(myMap)
    console.log(endroitsChoisis)
})

endroitsChoisis.forEach(element => {
    console.log(element)
});

axios.get('http://docketu.iutnc.univ-lorraine.fr:58180/serie/'+1+'/photos?token='+'a53a8f9936552c9337667a43eeb374cc17bf1c5011b756600abb24626369f2f4')
.then((response) => {
  response.data.photos.forEach(element => {
    console.log(element.long)
    console.log(element.lat)
  });
}).catch(
  error => console.log(error)
);

//Desactivar clic en doble zoom
myMap.doubleClickZoom.disable()