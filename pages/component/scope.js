import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useTheme } from "next-themes";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  // Legend
);

export const data = {
  labels: ['Python', 'JavaScript', 'Communication','C++', 'R', 'SQL/NOSQL','Critical Thinking','Git'],
  datasets: [
    {
      label: '# Skills',
      data: [9, 7, 7, 6, 4, 6, 7, 7],
      backgroundColor: 'rgba(255, 0, 0, 0.2)',
      borderColor: 'rgba(255, 0, 0, 1)',
      borderWidth: 1.5,
      fillColor:"rgba(220,0,0,0.5)",
      pointBackgroundColor:"rgba(0,0,0,0)"
      },
  ],
};

export default function Scope() {
const { systemTheme, theme, setTheme } = useTheme();
const currentTheme = theme === 'system' ? systemTheme : theme;

  return <Radar data={data} 
                options = {{scales: {r: {max: 9,min: 3, ticks: {stepSize: 3, color:'red' }}}}}
                
      />;
}
