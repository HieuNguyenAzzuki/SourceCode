const elem = document.getElementById('map')
if (elem) {
  const map = L.map(elem)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);
  map.setView([48.8584, 2.2945], 16);
  let eiffelMarker = L.marker([48.8584, 2.2945]).addTo(map);
  eiffelMarker.bindPopup("Eiffel Tower").openPopup();
}