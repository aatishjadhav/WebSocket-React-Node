// import express from 'express';
// import cors from 'cors';

// const app = express();
// const port = process.env.PORT || 8000;

// app.use(cors());
// app.use(express.json());

// let data = {
//   totalSales: 100000000, // 10 crore initial sales
//   giftCardSold: 50000,
//   giftCardRedeem: 30000,
//   giftCardLift: 5,
//   totalOrderLift: 3,
//   loyaltySignup: 10000,
//   loyaltyPointEarn: 500000,
//   loyaltyPointRedeem: 300000,
//   orderPlacedUsingLoyaltyPoint: 5000,
// };

// app.get('/api/gift-card-data', (req, res) => {
//   // Simulate data changes
//   data = {
//     totalSales: data.totalSales + Math.random() * 1000000,
//     giftCardSold: data.giftCardSold + Math.floor(Math.random() * 1000),
//     giftCardRedeem: data.giftCardRedeem + Math.floor(Math.random() * 800),
//     giftCardLift: data.giftCardLift + Math.random() * 0.5,
//     totalOrderLift: data.totalOrderLift + Math.random() * 0.3,
//     loyaltySignup: data.loyaltySignup + Math.floor(Math.random() * 500),
//     loyaltyPointEarn: data.loyaltyPointEarn + Math.floor(Math.random() * 10000),
//     loyaltyPointRedeem: data.loyaltyPointRedeem + Math.floor(Math.random() * 8000),
//     orderPlacedUsingLoyaltyPoint: data.orderPlacedUsingLoyaltyPoint + Math.floor(Math.random() * 200),
//   };

//   res.json(data);
// });

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });


// import express from 'express';
// import cors from 'cors';

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Set initial and target data values
// const targetData = {
//   totalSales: 5000000000,       // 50 crore target sales
//   giftCardSold: 2000000,        // Example target value for gift cards sold
//   giftCardRedeem: 1500000,      // Example target value for gift cards redeemed
//   giftCardLift: 10,             // Example target gift card lift
//   totalOrderLift: 8,            // Example target order lift
//   loyaltySignup: 500000,        // Example target loyalty signups
//   loyaltyPointEarn: 100000000,  // Example target loyalty points earned
//   loyaltyPointRedeem: 70000000, // Example target loyalty points redeemed
//   orderPlacedUsingLoyaltyPoint: 100000 // Example target orders placed using loyalty points
// };

// // Set initial values to 0
// let data = {
//   totalSales: 0,
//   giftCardSold: 0,
//   giftCardRedeem: 0,
//   giftCardLift: 0,
//   totalOrderLift: 0,
//   loyaltySignup: 0,
//   loyaltyPointEarn: 0,
//   loyaltyPointRedeem: 0,
//   orderPlacedUsingLoyaltyPoint: 0,
// };

// // Duration of the campaign in hours and update interval in milliseconds
// const totalDurationHours = 96;
// const updateIntervalMs = 10 * 1000; // Update every 10 seconds for smoother transitions
// const totalUpdates = (totalDurationHours * 60 * 60 * 1000) / updateIntervalMs;

// // Calculate incremental steps for each data point
// const incrementSteps = {
//   totalSales: targetData.totalSales / totalUpdates,
//   giftCardSold: targetData.giftCardSold / totalUpdates,
//   giftCardRedeem: targetData.giftCardRedeem / totalUpdates,
//   giftCardLift: targetData.giftCardLift / totalUpdates,
//   totalOrderLift: targetData.totalOrderLift / totalUpdates,
//   loyaltySignup: targetData.loyaltySignup / totalUpdates,
//   loyaltyPointEarn: targetData.loyaltyPointEarn / totalUpdates,
//   loyaltyPointRedeem: targetData.loyaltyPointRedeem / totalUpdates,
//   orderPlacedUsingLoyaltyPoint: targetData.orderPlacedUsingLoyaltyPoint / totalUpdates,
// };

// // Function to update data gradually
// const updateData = () => {
//   data = {
//     totalSales: Math.min(data.totalSales + incrementSteps.totalSales, targetData.totalSales),
//     giftCardSold: Math.min(data.giftCardSold + incrementSteps.giftCardSold, targetData.giftCardSold),
//     giftCardRedeem: Math.min(data.giftCardRedeem + incrementSteps.giftCardRedeem, targetData.giftCardRedeem),
//     giftCardLift: Math.min(data.giftCardLift + incrementSteps.giftCardLift, targetData.giftCardLift),
//     totalOrderLift: Math.min(data.totalOrderLift + incrementSteps.totalOrderLift, targetData.totalOrderLift),
//     loyaltySignup: Math.min(data.loyaltySignup + incrementSteps.loyaltySignup, targetData.loyaltySignup),
//     loyaltyPointEarn: Math.min(data.loyaltyPointEarn + incrementSteps.loyaltyPointEarn, targetData.loyaltyPointEarn),
//     loyaltyPointRedeem: Math.min(data.loyaltyPointRedeem + incrementSteps.loyaltyPointRedeem, targetData.loyaltyPointRedeem),
//     orderPlacedUsingLoyaltyPoint: Math.min(data.orderPlacedUsingLoyaltyPoint + incrementSteps.orderPlacedUsingLoyaltyPoint, targetData.orderPlacedUsingLoyaltyPoint),
//   };
// };

// // API route to fetch current data
// app.get('/api/gift-card-data', (req, res) => {
//   updateData();
//   res.json(data);
// });

// // Start server and set interval for data updates
// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
  
//   // Update data at the defined interval
//   setInterval(updateData, updateIntervalMs);
// });


// Using websockets
// import express from 'express';
// import cors from 'cors';
// import { WebSocketServer } from 'ws';

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Set initial and target data values
// const targetData = {
//   totalSales: 5000000000,
//   giftCardSold: 2000000,
//   giftCardRedeem: 1500000,
//   giftCardLift: 10,
//   totalOrderLift: 8,
//   loyaltySignup: 500000,
//   loyaltyPointEarn: 100000000,
//   loyaltyPointRedeem: 70000000,
//   orderPlacedUsingLoyaltyPoint: 100000,
// };

// // Set initial values to 0
// let data = {
//   totalSales: 0,
//   giftCardSold: 0,
//   giftCardRedeem: 0,
//   giftCardLift: 0,
//   totalOrderLift: 0,
//   loyaltySignup: 0,
//   loyaltyPointEarn: 0,
//   loyaltyPointRedeem: 0,
//   orderPlacedUsingLoyaltyPoint: 0,
// };

// // Duration of the campaign in hours and update interval in milliseconds
// const totalDurationHours = 96;
// const updateIntervalMs = 10 * 1000;
// const totalUpdates = (totalDurationHours * 60 * 60 * 1000) / updateIntervalMs;

// // Calculate incremental steps for each data point
// const incrementSteps = {
//   totalSales: targetData.totalSales / totalUpdates,
//   giftCardSold: targetData.giftCardSold / totalUpdates,
//   giftCardRedeem: targetData.giftCardRedeem / totalUpdates,
//   giftCardLift: targetData.giftCardLift / totalUpdates,
//   totalOrderLift: targetData.totalOrderLift / totalUpdates,
//   loyaltySignup: targetData.loyaltySignup / totalUpdates,
//   loyaltyPointEarn: targetData.loyaltyPointEarn / totalUpdates,
//   loyaltyPointRedeem: targetData.loyaltyPointRedeem / totalUpdates,
//   orderPlacedUsingLoyaltyPoint: targetData.orderPlacedUsingLoyaltyPoint / totalUpdates,
// };

// // Function to update data gradually
// const updateData = () => {
//   data = {
//     totalSales: Math.min(data.totalSales + incrementSteps.totalSales, targetData.totalSales),
//     giftCardSold: Math.min(data.giftCardSold + incrementSteps.giftCardSold, targetData.giftCardSold),
//     giftCardRedeem: Math.min(data.giftCardRedeem + incrementSteps.giftCardRedeem, targetData.giftCardRedeem),
//     giftCardLift: Math.min(data.giftCardLift + incrementSteps.giftCardLift, targetData.giftCardLift),
//     totalOrderLift: Math.min(data.totalOrderLift + incrementSteps.totalOrderLift, targetData.totalOrderLift),
//     loyaltySignup: Math.min(data.loyaltySignup + incrementSteps.loyaltySignup, targetData.loyaltySignup),
//     loyaltyPointEarn: Math.min(data.loyaltyPointEarn + incrementSteps.loyaltyPointEarn, targetData.loyaltyPointEarn),
//     loyaltyPointRedeem: Math.min(data.loyaltyPointRedeem + incrementSteps.loyaltyPointRedeem, targetData.loyaltyPointRedeem),
//     orderPlacedUsingLoyaltyPoint: Math.min(data.orderPlacedUsingLoyaltyPoint + incrementSteps.orderPlacedUsingLoyaltyPoint, targetData.orderPlacedUsingLoyaltyPoint),
//   };
// };

// // Start server
// const server = app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

// // WebSocket server
// const wss = new WebSocketServer({ server });

// // Broadcast data to all connected clients
// const broadcastData = () => {
//   const jsonData = JSON.stringify(data);
//   wss.clients.forEach((client) => {
//     if (client.readyState === client.OPEN) {
//       client.send(jsonData);
//     }
//   });
// };

// // Update and broadcast data periodically
// setInterval(() => {
//   updateData();
//   broadcastData();
// }, updateIntervalMs);



import { WebSocketServer } from 'ws';

// Set initial and target data values
const targetData = {
  totalSales: 5000000000,
  giftCardSold: 2000000,
  giftCardRedeem: 1500000,
  giftCardLift: 10,
  totalOrderLift: 8,
  loyaltySignup: 500000,
  loyaltyPointEarn: 100000000,
  loyaltyPointRedeem: 70000000,
  orderPlacedUsingLoyaltyPoint: 100000,
};


let data = {
  totalSales: 0,
  giftCardSold: 0,
  giftCardRedeem: 0,
  giftCardLift: 0,
  totalOrderLift: 0,
  loyaltySignup: 0,
  loyaltyPointEarn: 0,
  loyaltyPointRedeem: 0,
  orderPlacedUsingLoyaltyPoint: 0,
};


const totalDurationHours = 96;
const updateIntervalMs = 10 * 1000;
const totalUpdates = (totalDurationHours * 60 * 60 * 1000) / updateIntervalMs;


const incrementSteps = {
  totalSales: targetData.totalSales / totalUpdates,
  giftCardSold: targetData.giftCardSold / totalUpdates,
  giftCardRedeem: targetData.giftCardRedeem / totalUpdates,
  giftCardLift: targetData.giftCardLift / totalUpdates,
  totalOrderLift: targetData.totalOrderLift / totalUpdates,
  loyaltySignup: targetData.loyaltySignup / totalUpdates,
  loyaltyPointEarn: targetData.loyaltyPointEarn / totalUpdates,
  loyaltyPointRedeem: targetData.loyaltyPointRedeem / totalUpdates,
  orderPlacedUsingLoyaltyPoint: targetData.orderPlacedUsingLoyaltyPoint / totalUpdates,
};


const updateData = () => {
  data = {
    totalSales: Math.min(data.totalSales + incrementSteps.totalSales, targetData.totalSales),
    giftCardSold: Math.min(data.giftCardSold + incrementSteps.giftCardSold, targetData.giftCardSold),
    giftCardRedeem: Math.min(data.giftCardRedeem + incrementSteps.giftCardRedeem, targetData.giftCardRedeem),
    giftCardLift: Math.min(data.giftCardLift + incrementSteps.giftCardLift, targetData.giftCardLift),
    totalOrderLift: Math.min(data.totalOrderLift + incrementSteps.totalOrderLift, targetData.totalOrderLift),
    loyaltySignup: Math.min(data.loyaltySignup + incrementSteps.loyaltySignup, targetData.loyaltySignup),
    loyaltyPointEarn: Math.min(data.loyaltyPointEarn + incrementSteps.loyaltyPointEarn, targetData.loyaltyPointEarn),
    loyaltyPointRedeem: Math.min(data.loyaltyPointRedeem + incrementSteps.loyaltyPointRedeem, targetData.loyaltyPointRedeem),
    orderPlacedUsingLoyaltyPoint: Math.min(data.orderPlacedUsingLoyaltyPoint + incrementSteps.orderPlacedUsingLoyaltyPoint, targetData.orderPlacedUsingLoyaltyPoint),
  };
};


const wss = new WebSocketServer({ port: 5000 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.send(JSON.stringify(data));

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});


const broadcastData = () => {
  const jsonData = JSON.stringify(data);
  wss.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      client.send(jsonData);
    }
  });
};


setInterval(() => {
  updateData();
  broadcastData();
}, updateIntervalMs);

console.log('WebSocket server is running on port 5000');
