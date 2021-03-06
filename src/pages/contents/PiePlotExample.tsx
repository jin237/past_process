import {Pie } from 'react-chartjs-2'
import React from 'react'

const data = {
    labels: ['Input', 'Output'],
    datasets: [
        {
            data: [60,40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderwidth: 2,
        }
    ]
} 


export const PiePlotExample: React.FC = () => {
    return (
        <div>
            <Pie 
                data={data} 
                width={100}
                height={50}
            />
        </div>
    )
}