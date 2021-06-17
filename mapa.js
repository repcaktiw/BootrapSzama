const map = L.map('mapa').setView([52.5, 17.9], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([52.41041991068324, 16.926631059998467])
  .addTo(map)
  .bindPopup('Hej Poznań!')
  .openPopup();

L.marker([51.10964246256673, 17.035208454495212])
  .addTo(map)
  .bindPopup('Hej Wrocław!')
  .openPopup();

L.marker([53.122032063745316, 17.99949729701141])
  .addTo(map)
  .bindPopup('Hej Bydgoszcz!')
  .openPopup();
