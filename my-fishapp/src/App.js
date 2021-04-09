//FISH FARM
//verilen data yapisini state kullanarak web sayfasina yazdirmak.
//1. once components icine index sayfasi olusturduk.
//2. App.js icerisine verilen data yapisini state olarak girdik.
//3. Index.js de verilen bilgileri fonksiyona aktardik.
//4. app.js ile index.js deki bilgileri state ile alip webe aktardik

import React from 'react';
import './App.css';
import Fish from './components/index'


const App=(state)=>{ 
state = {
fishFarm: [ 
  { 
      fishType: "Salmon",
      price: 15.70,
      entryDate: new Date(2021, 0, 1), 
      durationInDays: 30,
      itemWeightInGrams: 145,
      originCountry: "Norway", 
      season: "Winter", 
      stockVolumeInKg: 6500,
      saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  { 
      fishType: "Seatrout",
      price: 7.90,
      entryDate: new Date(2021, 11, 12), 
      durationInDays: 20,
      itemWeightInGrams: 460,
      originCountry: "Japan", 
      season: "Winter", 
      stockVolumeInKg: 1600,
      saleLocations: ["GL", "GR", "BE", "VS"],
  },
  { 
      fishType: "Sailfish",
      price: 5.20,
      entryDate: new Date(2021, 3, 19),    
      durationInDays: 15,
      itemWeightInGrams: 240,
      originCountry: "United Kingdom", 
      season: "Spring", 
      stockVolumeInKg: 500,
      saleLocations: ["ZH", "SH", "BL", "SO"],
  },
  { 
      fishType: "Red Drum",
      price: 3.10,
      entryDate: new Date(2021, 5, 15),   
      durationInDays: 18,
      itemWeightInGrams: 300,
      originCountry: "Poland", 
      season: "Summer", 
      stockVolumeInKg: 15500,
      saleLocations: ["FR", "GE", "NE", "TI"],
  },
  { 
      fishType: "Pompano",
      price: 10,
      entryDate: new Date(2021, 8, 17),    
      durationInDays: 20,
      itemWeightInGrams: 645,
      originCountry: "France", 
      season: "Autumn", 
      stockVolumeInKg: 1500,
      saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  { 
      fishType: "Bluefish", 
      price: 13.70,
      entryDate: new Date(2021, 10, 11),  
      durationInDays: 5,
      itemWeightInGrams: 845,
      originCountry: "Italy", 
      season: "Winter", 
      stockVolumeInKg: 200,
      saleLocations: ["NW", "OW", "UR", "LU"],
  },
  { 
      fishType: "Mackerel",
      price: 8.90,
      entryDate: new Date(2021, 6, 18),    
      durationInDays: 16,
      itemWeightInGrams: 150,
      originCountry: "GREECE", 
      season: "Summer", 
      stockVolumeInKg: 8100,
      saleLocations: ["AG", "BL", "BE", "VD", "TG"],
  },
  { 
      fishType: "Perch",
      price: 11.90,
      entryDate: new Date(2021, 10, 1),  
      durationInDays: 30,
      itemWeightInGrams: 222,
      originCountry: "Egypt", 
      season: "Summer", 
      stockVolumeInKg: 9500,
      saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
  },
  { 
      fishType: "Mullet",
      price: 4.80,
      entryDate: new Date(2021, 2, 14),   
      durationInDays: 30,
      itemWeightInGrams: 333,
      originCountry: "Vietnam", 
      season: "Summer", 
      stockVolumeInKg: 600,
      saleLocations: ["ZH", "GE", "BE", "VD"],
  },
  { 
      fishType: "Tuna",
      price: 19.50,
      entryDate: new Date(2021, 0, 1),    
      durationInDays: 30,
      itemWeightInGrams: 250,
      originCountry: "Spain", 
      season: "Winter", 
      stockVolumeInKg: 2300,
      saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
  },  
]


}

  return (
    <div className="App">
      <h1>Fish Farm</h1>
            <Fish fish={state.fishFarm}/>
    </div>
  );
}

export default App;