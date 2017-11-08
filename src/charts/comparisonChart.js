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
  baseVal,
  dataset,
  domain,
  key1,
  key1Col,
  key2,
  key2Col,
  unit
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
      {baseVal ? (
        <ReferenceLine
          y={baseVal}
          label="norma"
          stroke="red"
          strokeDasharray="3 3"
        />
      ) : null}
    </LineChart>
  </ResponsiveContainer>
);

ComparisonChart.propTypes = {
  baseVal: number,
  dataset: arrayOf(object).isRequired,
  domain: arrayOf(number).isRequired,
  key1: string.isRequired,
  key1Col: string.isRequired,
  key2: string.isRequired,
  key2Col: string.isRequired,
  unit: string.isRequired
};

ComparisonChart.defaultProps = {
  baseVal: null
};

export default ComparisonChart;
