// import React, { useEffect, useState } from "react";
// import './App.css';
// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';



// export default function App() {
  
//   const [data, setData] = useState(null);
//   const [elapsedTime, setElapsedTime] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${API_URL}/api/gift-card-data`);
//         const newData = await response.json();
//         setData(newData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     const startTime = Date.now();
//     fetchData(); // Initial fetch

//     const interval = setInterval(() => {
//       fetchData();
//       setElapsedTime((Date.now() - startTime) / 3600000); // Convert ms to hours
//     }, 5000); // Update every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const formatNumber = (num) => new Intl.NumberFormat("en-IN").format(Math.round(num));
//   const formatCurrency = (num) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(num);
//   const formatPercentage = (num) => num.toFixed(2) + "%";

//   if (!data) return <div>Loading...</div>;

//   return (
//     <div className="p-4 space-y-4">
//        <h1 className="text-2xl font-bold text-center">Black Friday & Cyber Monday Gift Card Dashboard</h1>

      
//       <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
//         <div
//           className="bg-blue-500 h-4 rounded-full"
//           style={{ width: `${(elapsedTime / 96) * 100}%` }}
//         ></div>
//       </div>
//       <p className="text-center">Elapsed Time: {elapsedTime.toFixed(2)} hours / 96 hours</p>

     
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-lg font-semibold">Total Sales</h2>
//           <p className="text-2xl font-bold">{formatCurrency(data.totalSales)}</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-lg font-semibold">Gift Cards Sold</h2>
//           <p className="text-2xl font-bold">{formatNumber(data.giftCardSold)}</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-lg font-semibold">Gift Cards Redeemed</h2>
//           <p className="text-2xl font-bold">{formatNumber(data.giftCardRedeem)}</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-lg font-semibold">Gift Card Lift</h2>
//           <p className="text-2xl font-bold">{formatPercentage(data.giftCardLift)}</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-lg font-semibold">Total Order Lift</h2>
//           <p className="text-2xl font-bold">{formatPercentage(data.totalOrderLift)}</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-lg font-semibold">Loyalty Signups</h2>
//           <p className="text-2xl font-bold">{formatNumber(data.loyaltySignup)}</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-lg font-semibold">Loyalty Points Earned</h2>
//           <p className="text-2xl font-bold">{formatNumber(data.loyaltyPointEarn)}</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-lg font-semibold">Loyalty Points Redeemed</h2>
//           <p className="text-2xl font-bold">{formatNumber(data.loyaltyPointRedeem)}</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-lg font-semibold">Orders Using Loyalty Points</h2>
//           <p className="text-2xl font-bold">{formatNumber(data.orderPlacedUsingLoyaltyPoint)}</p>
//         </div>
//       </div> 
//     </div>
//   );
// }


// Using Websockets
// import React, { useEffect, useState } from "react";
// import './App.css';

// const API_URL = process.env.REACT_APP_API_URL || 'ws://localhost:5000';

// export default function App() {
//   const [data, setData] = useState(null);
//   const [elapsedTime, setElapsedTime] = useState(0);

//   useEffect(() => {
//     const startTime = Date.now();
//     const socket = new WebSocket(API_URL);

//     socket.onmessage = (event) => {
//       const newData = JSON.parse(event.data);
//       setData(newData);
//       setElapsedTime((Date.now() - startTime) / 3600000); 
//     };

//     socket.onerror = (error) => {
//       console.error("WebSocket error:", error);
//     };

//     return () => {
//       socket.close();
//     };
//   }, []);

//   const formatNumber = (num) => new Intl.NumberFormat("en-US").format(Math.round(num));
//   const formatCurrency = (num) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(num);
//   const formatPercentage = (num) => num.toFixed(2) + "%";

//   if (!data) return <div>Loading...</div>;

//   return (
//     <div className="p-4 space-y-4">
//       <h1 className="text-2xl font-bold text-center">Black Friday & Cyber Monday Gift Card Dashboard</h1>
      
//       <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
//         <div
//           className="bg-blue-500 h-4 rounded-full"
//           style={{ width: `${(elapsedTime / 96) * 100}%` }}
//         ></div>
//       </div>
//       <p className="text-center">Elapsed Time: {elapsedTime.toFixed(2)} hours / 96 hours</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">        <div className="bg-white shadow-lg rounded-lg p-4">          <h2 className="text-lg font-semibold">Total Sales</h2>          <p className="text-2xl font-bold">{formatCurrency(data.totalSales)}</p>        </div>
//        <div className="bg-white shadow-lg rounded-lg p-4">
//          <h2 className="text-lg font-semibold">Gift Cards Sold</h2>
//          <p className="text-2xl font-bold">{formatNumber(data.giftCardSold)}</p>
//         </div>
//          <div className="bg-white shadow-lg rounded-lg p-4">
//          <h2 className="text-lg font-semibold">Gift Cards Redeemed</h2>
//           <p className="text-2xl font-bold">{formatNumber(data.giftCardRedeem)}</p>
//        </div>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//          <h2 className="text-lg font-semibold">Gift Card Lift</h2>
//           <p className="text-2xl font-bold">{formatPercentage(data.giftCardLift)}</p>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-lg font-semibold">Total Order Lift</h2>
//          <p className="text-2xl font-bold">{formatPercentage(data.totalOrderLift)}</p>
//          </div>
//          <div className="bg-white shadow-lg rounded-lg p-4">
//            <h2 className="text-lg font-semibold">Loyalty Signups</h2>
//            <p className="text-2xl font-bold">{formatNumber(data.loyaltySignup)}</p>
//         </div>
//          <div className="bg-white shadow-lg rounded-lg p-4">
//            <h2 className="text-lg font-semibold">Loyalty Points Earned</h2>
//            <p className="text-2xl font-bold">{formatNumber(data.loyaltyPointEarn)}</p>
//          </div>
//         <div className="bg-white shadow-lg rounded-lg p-4">
//            <h2 className="text-lg font-semibold">Loyalty Points Redeemed</h2>
//         <p className="text-2xl font-bold">{formatNumber(data.loyaltyPointRedeem)}</p>
//          </div>
//          <div className="bg-white shadow-lg rounded-lg p-4">
//            <h2 className="text-lg font-semibold">Orders Using Loyalty Points</h2>
//            <p className="text-2xl font-bold">{formatNumber(data.orderPlacedUsingLoyaltyPoint)}</p>
//          </div>
//        </div> 
//      </div>
//   );
// }


import React, { useEffect, useState } from "react";
import './index.css';

const API_URL = process.env.REACT_APP_API_URL || 'ws://localhost:5000';

export default function App() {
  const [data, setData] = useState({
    totalSales: 0,
    giftCardSold: 0,
    giftCardRedeem: 0,
    giftCardLift: 0,
    totalOrderLift: 0,
    loyaltySignup: 0,
    loyaltyPointEarn: 0,
    loyaltyPointRedeem: 0,
    orderPlacedUsingLoyaltyPoint: 0,
  });
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const socket = new WebSocket(API_URL);
  
    socket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData);
      setElapsedTime((Date.now() - startTime) / 3600000); 
    };
  
    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  
    return () => {
      socket.close(); 
      console.log("WebSocket connection closed");
    };
  }, []);
  

  const formatNumber = (num) => new Intl.NumberFormat("en-US").format(Math.round(num));
  const formatCurrency = (num) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(num);
  const formatPercentage = (num) => num.toFixed(2) + "%";

  const progressPercentage = Math.min((elapsedTime / 96) * 100, 100); // Cap progress at 100%

  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Black Friday & Cyber Monday Dashboard</h1>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${(elapsedTime / 96) * 100}%` }}
        ></div>
      </div>
      
      
      <p className="text-center">Elapsed Time: {progressPercentage.toFixed(2)} hours / 96 hours</p>

      {/* Statistics grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-2xl font-bold">{formatCurrency(data.totalSales)}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold">Gift Cards Sold</h2>
          <p className="text-2xl font-bold">{formatNumber(data.giftCardSold)}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold">Gift Cards Redeemed</h2>
          <p className="text-2xl font-bold">{formatNumber(data.giftCardRedeem)}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold">Gift Card Lift</h2>
          <p className="text-2xl font-bold">{formatPercentage(data.giftCardLift)}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold">Total Order Lift</h2>
          <p className="text-2xl font-bold">{formatPercentage(data.totalOrderLift)}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold">Loyalty Signups</h2>
          <p className="text-2xl font-bold">{formatNumber(data.loyaltySignup)}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold">Loyalty Points Earned</h2>
          <p className="text-2xl font-bold">{formatNumber(data.loyaltyPointEarn)}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold">Loyalty Points Redeemed</h2>
          <p className="text-2xl font-bold">{formatNumber(data.loyaltyPointRedeem)}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-lg font-semibold">Orders Using Loyalty Points</h2>
          <p className="text-2xl font-bold">{formatNumber(data.orderPlacedUsingLoyaltyPoint)}</p>
        </div>
      </div> 
    </div>
  );
}
