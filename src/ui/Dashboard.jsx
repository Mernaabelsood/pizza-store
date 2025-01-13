import React from 'react';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.size = 20;
defaults.plugins.title.color = "black";

export default function Dashboard() {
  const colorPalette = ["#36a2eb", "#ff6384", "#f59e0b"];  

  return (
    <> 
      <div className=" p-8 flex flex-col gap-y-8 bg-stone-200  pt-20">
      
        {/* First Row */}
        <div className='flex justify-center gap-x-4'>
          <div className="w-[344px] h-[100px] rounded-[20px] border border-black text-center font-bold">
            <h2>Total Orders</h2>
          </div>
          <div className="w-[344px] h-[100px] rounded-[20px] border border-black text-center font-bold">
            <h2>Revenue</h2>
          </div>
          <div className="w-[344px] h-[100px] rounded-[20px] border border-black text-center font-bold">
            <h2>Best Seller Pizza</h2>
          </div>
          <div className="w-[344px] h-[100px] rounded-[20px] border border-black text-center font-bold">
            <h2>Customer Feedback</h2>
          </div>
        </div>

        {/* Second Row */}
        <div className='flex justify-center gap-x-4'>
          <div className="w-[736px] h-[350px] rounded-[20px] border border-black">
            <Line
              data={{
                labels: [
                  "January", "February", "March", "April", "May", "June", "July",
                ],
                datasets: [
                  {
                    label: "Pizza Sales Revenue",
                    data: [5000, 7000, 8000, 8500, 9500, 10000, 12000],
                    borderColor: "#36a2eb",
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                  },
                  {
                    label: "Average Order Value",
                    data: [35, 40, 42, 50, 55, 60, 70],
                    borderColor: "#ff6384",
                    borderDash: [5, 5],
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Pizza Sales Revenue Over Time",
                    display: true,
                    align: "center",
                    color: "#333",
                    font: {
                      size: 16,
                    },
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      color: "#333",
                    },
                  },
                  x: {
                    ticks: {
                      color: "#333",
                    },
                  },
                },
              }}
            />
          </div>
          <div className="w-[245px] h-[350px] rounded-[20px] border border-black">
            <div className="p-4">
              <h2 className="text-center text-blue-600 font-medium mb-4">Top Selling Pizzas</h2>
              <div className="flex flex-col gap-0">
                <div className="flex justify-between mb-2">
                  <span>Margherita Pizza</span>
                  <span className="font-bold">5,120</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Pepperoni Pizza</span>
                  <span className="font-bold">4,800</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>BBQ Chicken Pizza</span>
                  <span className="font-bold">3,950</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Vegetarian Pizza</span>
                  <span className="font-bold">3,250</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="w-[438px] h-[350px] rounded-[20px] border border-black">
            <Doughnut
              data={{
                labels: [
                  "Delivered Orders", 
                  "Pending Orders", 
                  "Canceled Orders"
                ],
                datasets: [
                  {
                    data: [75, 15, 10],
                    backgroundColor: colorPalette,  
                    hoverOffset: 4,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Order Status Distribution",
                    display: true,
                    align: "center",
                    color: "#333",
                    font: {
                      size: 16,
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Third Row */}
        <div className='flex justify-center gap-x-4'>
          <div className="w-[1029px] h-[340px] rounded-[20px] border border-black">
            <Bar
              data={{
                labels: [
                  "January", "February", "March", "April", "May", "June", "July", 
                  "August", "September", "October", "November", "December"
                ],
                datasets: [
                  {
                    label: "Monthly Profits (USD)",
                    data: [1000, 1500, 2000, 1700, 2100, 2500, 3000, 2800, 3200, 2700, 2500, 3000],
                    backgroundColor: colorPalette,  
                    borderRadius: 10,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Monthly Profits from Pizza Sales",
                    display: true,
                    align: "center",
                    color: "#333",
                    font: {
                      size: 16,
                    },
                  },
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    barPercentage: 0.4,
                    categoryPercentage: 0.6,
                    ticks: {
                      color: "#333",
                    },
                  },
                  y: {
                    beginAtZero: true,
                    ticks: {
                      color: "#333",
                    },
                  },
                },
              }}
            />
          </div>
          <div className="w-[438px] h-[340px] rounded-[20px] border border-black ">
            <div className="p-4">
              <h2 className="text-center text-blue-600 font-medium mb-4">
                Recent Orders & Payments
              </h2>
              <div className="flex flex-col gap-2 ">
                <div className="flex justify-between  ">
                  <span className="flex-1 ">● John Doe</span>
                  <span className="w-10 text-center">$25</span>
                  <span className="font-bold w-24 ">Paid</span>
                </div>
                <div className="flex justify-between ">
                  <span className="flex-1 ">● Sarah Lee</span>
                  <span className="w-10 text-center">$30</span>
                  <span className="font-bold w-24 ">Paid</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex-1 ">● Mike Johnson</span>
                  <span className="w-10 text-center">$22</span>
                  <span className="font-bold w-24 ">Pending</span>
                </div>
                <div className="flex justify-between ">
                  <span className="flex-1 ">● Emma Watson</span>
                  <span className="w-10 text-center">$28</span>
                  <span className="font-bold w-24 ">Paid</span>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>

</>);
}
