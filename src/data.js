[
  { vehicle: "Volkswagen F-150", price: "869.00", id: "1" },
  { vehicle: "Land Rover Spyder", price: "334.00", id: "2" },
  { vehicle: "Mini Grand Cherokee", price: "39.00", id: "3" },
  { vehicle: "Mini CTS", price: "705.00", id: "4" },
  { vehicle: "Land Rover Camry", price: "648.00", id: "5" },
  { vehicle: "Porsche Aventador", price: "730.00", id: "6" },
  { vehicle: "Polestar Mercielago", price: "767.00", id: "7" },
  { vehicle: "Maserati CX-9", price: "202.00", id: "8" },
  { vehicle: "Ferrari Model 3", price: "557.00", id: "9" },
  { vehicle: "Hyundai Beetle", price: "897.00", id: "10" },
];

// setup:
const data = {
  labels: [
    "Volkswagen",
    "Land Rover Spyder",
    "Mini Grand Cherokee",
    "Mini CTS",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [869.0, 334.0, 39.0, 705.0],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(255, 0, 100)",
      ],
      hoverOffset: 4,
    },
  ],
};

// config:
const config = {
  type: "pie",
  data: data,
};

console.log(config);
