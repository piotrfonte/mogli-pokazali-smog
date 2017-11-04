import React from "react";
import { arrayOf, object } from "prop-types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const Chart = props => {
  // console.log(props.dataset);
  return (
    <div>
      <h2>CO</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={props.dataset}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
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
          <XAxis dataKey="date" />
          <YAxis label="mg/m3" type="number" />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="30 0" />
          <Area
            activeDot={{ r: 10 }}
            dataKey="PmGdaWyzwo03"
            dot={{ r: 0 }}
            stroke="6c78af"
            type="monotone"
            // fill="url(#colorPv)"
            fill="#68cdc4"
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
