const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  species: { type: String },
  sunlightHours: { type: Number, default: 0 },
  soilMoisture: { type: Number, default: 0 },
  lastWatered: { type: Date, default: Date.now },
  growth: [{ date: Date, height: Number }]
});

module.exports = mongoose.model('Plant', PlantSchema);
