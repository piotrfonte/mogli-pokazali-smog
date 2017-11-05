import React from "react";
import { arrayOf, number, object, string } from "prop-types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";

const SingleChart = ({ dataset, subset, keyCol, unit, domain, baseVal }) => (
  <ResponsiveContainer width="100%" height={200}>
    <AreaChart data={dataset}>
      <XAxis dataKey="date" />
      <YAxis label={unit} type="number" domain={domain} />
      <Tooltip />
      <CartesianGrid strokeDasharray="30 0" />
      <Area
        activeDot={{ r: 10 }}
        dataKey={subset}
        dot={{ r: 0 }}
        fill={keyCol}
        stroke={keyCol}
        type="monotone"
      />
      {baseVal ? (
        <ReferenceLine
          y={50}
          label="norma"
          stroke="red"
          strokeDasharray="3 3"
        />
      ) : null}
    </AreaChart>
  </ResponsiveContainer>
);

SingleChart.propTypes = {
  dataset: arrayOf(object).isRequired,
  domain: arrayOf(number).isRequired,
  subset: string.isRequired,
  keyCol: string.isRequired,
  unit: string.isRequired,
  baseVal: number
};

SingleChart.defaultProps = {
  baseVal: null
};

export default SingleChart;
