import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Dashboard = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [{
            label: "Orders",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          }],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="p-4 bg-base-100">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-primary mb-4 md:mb-0">Food Order Dashboard</h2>
        <button className="btn btn-primary">New Order</button>
      </div>
      <div className="mb-4 p-6 bg-base-200 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Order Statistics</h3>
        <div className="w-full md:w-2/3 mx-auto">
          <canvas ref={chartContainer}></canvas>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Card 1 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h4 className="card-title">Order #12345</h4>
            <p>Details about the order go here.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">View</button>
            </div>
          </div>
        </div>
        {/* Example Card 2 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h4 className="card-title">Order #12346</h4>
            <p>Details about the order go here.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">View</button>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Dashboard;
