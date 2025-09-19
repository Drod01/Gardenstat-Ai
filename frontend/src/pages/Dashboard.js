import React, { useEffect, useState } from 'react';
import PlantCard from '../components/PlantCard';

const Dashboard = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/plants", {
      headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
    })
      .then(res => res.json())
      .then(data => setPlants(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">🌱 My Plants</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {plants.map(plant => <PlantCard key={plant._id} plant={plant} />)}
      </div>
    </div>
  );
};

export default Dashboard;
