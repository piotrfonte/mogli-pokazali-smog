import React from "react";
import { arrayOf, object } from "prop-types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";

const Chart = props => {
  return (
    <div>
      <h2>Porównanie poziomów CO w powietrzu — rok 2016 (Gdańsk vs. Elbląg)</h2>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={props.dataset}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8884d8" stopOpacity={0.7} />
              <stop offset="33%" stopColor="#8884d8" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#82ca9d" stopOpacity={0.7} />
              <stop offset="33%" stopColor="#82ca9d" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" />
          <YAxis label="mg/m3" />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <ReferenceLine
            y={10}
            label="Norm"
            stroke="red"
            strokeDasharray="3 3"
          />
          <Area
            type="monotone"
            dataKey="gda"
            stroke="#6c78af"
            dot={{ r: 0 }}
            fill="url(#colorPv)"
            activeDot={{ r: 10 }}
          />
          <Area
            type="monotone"
            dataKey="elb"
            stroke="#54b794"
            fill="url(#colorUv)"
            dot={{ r: 0 }}
            activeDot={{ r: 10 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

Chart.propTypes = {
  dataset: arrayOf(object).isRequired
};

export default Chart;
