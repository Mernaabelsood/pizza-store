import React from 'react';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.size = 20;
defaults.plugins.title.color = 'black';

export default function Dashboard() {
  const { t } = useTranslation();
  const colorPalette = ['#36a2eb', '#ff6384', '#f59e0b'];

  return (
    <>
      <div className=" flex flex-col gap-y-8 bg-stone-200 p-8  pt-20">
        {/* First Row */}
        <div className="flex justify-center gap-x-4">
          <div className="h-[100px] w-[344px] rounded-[20px] border border-black text-center font-bold">
            <h2>{t('totalOrders')}</h2>
          </div>
          <div className="h-[100px] w-[344px] rounded-[20px] border border-black text-center font-bold">
            <h2>{t('revenue')}</h2>
          </div>
          <div className="h-[100px] w-[344px] rounded-[20px] border border-black text-center font-bold">
            <h2>{t('bestSeller')}</h2>
          </div>
          <div className="h-[100px] w-[344px] rounded-[20px] border border-black text-center font-bold">
            <h2>{t('customerFeedback')}</h2>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-center gap-x-4">
          <div className="h-[350px] w-[736px] rounded-[20px] border border-black">
            <Line
              data={{
                labels: [
                  t('january'),
                  t('february'),
                  t('march'),
                  t('april'),
                  t('may'),
                  t('june'),
                  t('july'),
                ],
                datasets: [
                  {
                    label: t('pizzaSalesRevenue'),
                    data: [5000, 7000, 8000, 8500, 9500, 10000, 12000],
                    borderColor: '#36a2eb',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                  },
                  {
                    label: t('avgOrderValue'),
                    data: [35, 40, 42, 50, 55, 60, 70],
                    borderColor: '#ff6384',
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
                    text: t('pizzaSalesRevenueOverTime'),
                    display: true,
                    align: 'center',
                    color: '#333',
                    font: {
                      size: 16,
                    },
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      color: '#333',
                    },
                  },
                  x: {
                    ticks: {
                      color: '#333',
                    },
                  },
                },
              }}
            />
          </div>
          <div className="h-[350px] w-[245px] rounded-[20px] border border-black">
            <div className="p-4">
              <h2 className="mb-4 text-center font-medium text-blue-600">
                {t('topSellingPizzas')}
              </h2>
              <div className="flex flex-col gap-0">
                <div className="mb-2 flex justify-between">
                  <span>{t('margherita')}</span>
                  <span className="font-bold">5,120</span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span>{t('pepperoni')}</span>
                  <span className="font-bold">4,800</span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span>{t('bbqChicken')}</span>
                  <span className="font-bold">3,950</span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span>{t('vegetarian')}</span>
                  <span className="font-bold">3,250</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[350px] w-[438px] rounded-[20px] border border-black">
            <Doughnut
              data={{
                labels: [
                  t('deliveredOrders'),
                  t('pendingOrders'),
                  t('canceledOrders'),
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
                    text: t('orderStatusDistribution'),
                    display: true,
                    align: 'center',
                    color: '#333',
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
        <div className="flex justify-center gap-x-4">
          <div className="h-[340px] w-[1029px] rounded-[20px] border border-black">
            <Bar
              data={{
                labels: [
                  t('january'),
                  t('february'),
                  t('march'),
                  t('april'),
                  t('may'),
                  t('june'),
                  t('july'),
                  t('august'),
                  t('september'),
                  t('october'),
                  t('november'),
                  t('december'),
                ],
                datasets: [
                  {
                    label: t('monthlyProfits'),
                    data: [
                      1000, 1500, 2000, 1700, 2100, 2500, 3000, 2800, 3200,
                      2700, 2500, 3000,
                    ],
                    backgroundColor: colorPalette,
                    borderRadius: 10,
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: t('monthlyProfitsFromSales'),
                    display: true,
                    align: 'center',
                    color: '#333',
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
                      color: '#333',
                    },
                  },
                  y: {
                    beginAtZero: true,
                    ticks: {
                      color: '#333',
                    },
                  },
                },
              }}
            />
          </div>
          <div className="h-[340px] w-[438px] rounded-[20px] border border-black ">
            <div className="p-4">
              <h2 className="mb-4 text-center font-medium text-blue-600">
                {t('recentOrders')} & {t('payments')}
              </h2>
              <div className="flex flex-col gap-2 ">
                <div className="flex justify-between  ">
                  <span className="flex-1 ">● John Doe</span>
                  <span className="w-10 text-center">$25</span>
                  <span className="w-24 font-bold ">{t('paid')}</span>
                </div>
                <div className="flex justify-between ">
                  <span className="flex-1 ">● Sarah Lee</span>
                  <span className="w-10 text-center">$30</span>
                  <span className="w-24 font-bold ">{t('paid')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex-1 ">● Mike Johnson</span>
                  <span className="w-10 text-center">$22</span>
                  <span className="w-24 font-bold ">{t('pending')}</span>
                </div>
                <div className="flex justify-between ">
                  <span className="flex-1 ">● Emma Watson</span>
                  <span className="w-10 text-center">$28</span>
                  <span className="w-24 font-bold ">{t('paid')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
