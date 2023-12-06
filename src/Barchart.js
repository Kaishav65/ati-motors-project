// Point 2 - Analytics:
// Plot bar chart - Market cap vs Company
// API: https://json-placeholder.mock.beeceptor.com/companies

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
// imports necessary dependencies from the react and react-chartjs-2 libraries.
// imports specific elements and scales from chart.js and registers them using ChartJS.register().
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barchart = () => {
  // State to manage data for the bar chart
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Market Cap",
        backgroundColor: [], // Updated to an empty array
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [],
      },
    ],
  });

  useEffect(() => {
    // Effect to fetch data and update the chart on component mount
    const fetchData = async () => {
      try {
        // Fetching data from given API endpoint
        const response = await fetch(
          "https://json-placeholder.mock.beeceptor.com/companies"
        );
        const companies = await response.json();

        const companyNames = companies.map((company) => company.name);
        const marketCaps = companies.map((company) => company.marketCap);

        // random colors for each bar
        const barColors = Array.from(
          { length: companyNames.length },
          () =>
            `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 0.2)`
        );
   // Updating the state with the fetched and processed data
        setData((prevData) => ({
          ...prevData,
          labels: companyNames,
          datasets: [
            {
              ...prevData.datasets[0],
              backgroundColor: barColors,
              data: marketCaps,
            },
          ],
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "95%",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: [
              {
                type: "category", 
                title: { display: true, text: "Company" },
                grid: { display: false },
              },
            ],
            y: [{ title: { display: true, text: "Market Cap" } }],
          },
        }}
      />
    </div>
  );
};

export default Barchart;
