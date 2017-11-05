import React from "react";
import { arrayOf, object } from "prop-types";
import css from "styled-components";
import { filter, size, groupBy, forEach, omitBy, maxBy } from "lodash";
import {
  AreaChart,
  LineChart,
  Line,
  Area,
  XAxis,
  ReferenceLine,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { setSpace } from "../utils";

const Visualisations = css.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  justify-content: center;
`;

const Visualisation = css.div`
  ${setSpace("mbl")};
  flex-basis: ${100 / 4}%;
  text-align: center;
  position: relative;
`;

const Chart = props => {
  console.log(props.dataset);

  const arr = props.dataset;
  const countOverexposureDays = location =>
    size(
      filter(
        groupBy(arr, o => o.date),
        (value, key) =>
          maxBy(value, o2 => o2[location])[location] > 50 ? key : null
      )
    );

  return (
    <div>
      <h2>Comparison PM10</h2>

      {
        <Visualisations>
          <h3>Gdańsk vs. Kraków</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Line
                activeDot={{ r: 10 }}
                dataKey="MpKrakAlKras"
                dot={{ r: 0 }}
                stroke="#8ecc50"
                type="monotone"
              />
              <Line
                activeDot={{ r: 10 }}
                dataKey="PmGdaWyzwo03"
                dot={{ r: 0 }}
                stroke="#cb51ad"
                type="monotone"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </LineChart>
          </ResponsiveContainer>
        </Visualisations>
      }
      <h2> Individual PM10 </h2>

      <Visualisations>
        <Visualisation>
          <h3>Wrocław</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="DsWrocWybCon"
                dot={{ r: 0 }}
                stroke="#cc5151"
                type="monotone"
                fill="#cc5151"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
          Dni ponad normę: {countOverexposureDays("DsWrocWybCon")}
        </Visualisation>
        <Visualisation>
          <h3>Łódź</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="LdLodzGdansk"
                dot={{ r: 0 }}
                stroke="#52cccc"
                type="monotone"
                fill="#52cccc"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
          Dni ponad normę: {countOverexposureDays("LdLodzGdansk")}
        </Visualisation>
        <Visualisation>
          <h3>Kraków</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="MpKrakAlKras"
                dot={{ r: 0 }}
                stroke="#8ecc50"
                type="monotone"
                fill="#8ecc50"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
          Dni ponad normę: {countOverexposureDays("MpKrakAlKras")}
        </Visualisation>
        <Visualisation>
          <h3>Zakopane</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="MpZakopaSien"
                dot={{ r: 0 }}
                stroke="#8e51cc"
                type="monotone"
                fill="#8e51cc"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
          Dni ponad normę: {countOverexposureDays("MpZakopaSien")}
        </Visualisation>
        <Visualisation>
          <h3>Warszawa</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="MzWarMarszal"
                dot={{ r: 0 }}
                stroke="#cbad50"
                type="monotone"
                fill="#cbad50"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
          Dni ponad normę: {countOverexposureDays("MzWarMarszal")}
        </Visualisation>
        <Visualisation>
          <h3>Białystok</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="PdBialWarsza"
                dot={{ r: 0 }}
                stroke="#337f46"
                type="monotone"
                fill="#337f46"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
          Dni ponad normę: {countOverexposureDays("PdBialWarsza")}
        </Visualisation>
        <Visualisation>
          <h3>Rzeszów</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="PkRzeszRejta"
                dot={{ r: 0 }}
                stroke="#5170cc"
                type="monotone"
                fill="#5170cc"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
          Dni ponad normę: {countOverexposureDays("PkRzeszRejta")}
        </Visualisation>
        <Visualisation>
          <h3>Gdańsk</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="PmGdaWyzwo03"
                dot={{ r: 0 }}
                stroke="#cb51ad"
                type="monotone"
                fill="#cb51ad"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
          Dni ponad normę: {countOverexposureDays("PmGdaWyzwo03")}
        </Visualisation>
        <Visualisation>
          <h3>Katowice</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="SlKatoKossut"
                dot={{ r: 0 }}
                stroke="#757f33"
                type="monotone"
                fill="#757f33"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
          Dni ponad normę: {countOverexposureDays("SlKatoKossut")}
        </Visualisation>
        <Visualisation>
          <h3>Olsztyn</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="WmOlsPuszkin"
                dot={{ r: 0 }}
                stroke="#7f4134"
                type="monotone"
                fill="#7f4134"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
          Dni ponad normę: {countOverexposureDays("WmOlsPuszkin")}
        </Visualisation>
        <Visualisation>
          <h3>Poznań</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="WpPoznPolank"
                dot={{ r: 0 }}
                stroke="#3c3380"
                type="monotone"
                fill="#3c3380"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
          Dni ponad normę: {countOverexposureDays("WpPoznPolank")}
        </Visualisation>
        <Visualisation>
          <h3>Szczecin</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="ug/m3" type="number" domain={[0, 400]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="ZpSzczLacz04"
                dot={{ r: 0 }}
                stroke="#75337f"
                type="monotone"
                fill="#75337f"
              />
              <ReferenceLine
                y={50}
                label="norma"
                stroke="red"
                strokeDasharray="3 3"
              />
            </AreaChart>
          </ResponsiveContainer>
          Dni ponad normę: {countOverexposureDays("ZpSzczLacz04")}
        </Visualisation>
      </Visualisations>
    </div>
  );
};

Chart.propTypes = {
  dataset: arrayOf(object).isRequired
};

export default Chart;
