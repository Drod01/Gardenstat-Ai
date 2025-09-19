import React from 'react';

const PlantCard = ({ plant }) => (
  <div className="bg-green-100 p-4 rounded shadow">
    <h2 className="font-bold">{plant.name}</h2>
    <p>Species: {plant.species}</p>
    <p>Sunlight: {plant.sunlightHours} hrs</p>
    <p>Soil Moisture: {plant.soilMoisture}%</p>
  </div>
);

export default PlantCard;
