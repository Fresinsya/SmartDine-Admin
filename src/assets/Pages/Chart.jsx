import React from 'react'
import { Line } from 'react-chartjs-2';

const chart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Monthly Progress',
                data: [5, 10, 8, 15, 12],
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    // Konfigurasi Chart
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    return (
        <div>
            <h2>My Progress Chart</h2>
            <Line data={data} options={options} />
        </div>

    )

}

export default chart