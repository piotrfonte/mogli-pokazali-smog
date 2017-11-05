import React from "react";
import { arrayOf, number, object, string } from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  ReferenceLine,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const ComparisonChart = ({
  dataset,
  key1,
  key2,
  key1Col,
  key2Col,
  unit,
  domain
}) => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={dataset}>
      <XAxis dataKey="date" />
      <YAxis label={unit} type="number" domain={domain} />
      <Tooltip />
      <CartesianGrid strokeDasharray="30 0" />
      <Line
        activeDot={{ r: 10 }}
        dataKey={key1}
        dot={{ r: 0 }}
        stroke={key1Col}
        type="monotone"
      />
      <Line
        activeDot={{ r: 10 }}
        dataKey={key2}
        dot={{ r: 0 }}
        stroke={key2Col}
        type="monotone"
      />
      <ReferenceLine y={50} label="norma" stroke="red" strokeDasharray="3 3" />
    </LineChart>
  </ResponsiveContainer>
);

ComparisonChart.propTypes = {
  dataset: arrayOf(object).isRequired,
  key1: string.isRequired,
  key2: string.isRequired,
  key1Col: string.isRequired,
  key2Col: string.isRequired,
  unit: string.isRequired,
  domain: arrayOf(number).isRequired
};

export default ComparisonChart;
