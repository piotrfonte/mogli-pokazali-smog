import React from "react";
import { arrayOf, object } from "prop-types";
import css from "styled-components";
import {
  AreaChart,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { setSpace, styleText } from "../utils";

import Copy from "../components/Copy";
import Separator from "../components/Separator";
import ComparisonChart from "../charts/comparisonChart";

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

const VisualisationTitle = css.h3`
  ${setSpace("mbm")};
  ${styleText.h6};
`;

const CO = props => {
  // console.log(props.dataset);
  return (
    <div>
      <Copy>
        <h2 className="h2"> Comparison CO </h2>
      </Copy>
      <Separator silent size="m" />

      <Visualisations>
        <VisualisationTitle>Gdańsk vs. Kraków</VisualisationTitle>
        <ComparisonChart
          dataset={props.dataset}
          domain={[0, 4]}
          key1="MpKrakAlKras"
          key1Col="#8ecc50"
          key2="PmGdaWyzwo03"
          key2Col="#cb51ad"
          unit="mg/m3"
        />
      </Visualisations>

      <Separator silent size="l" />
      <Copy>
        <h2 className="h2">Individual CO</h2>
      </Copy>
      <Separator silent size="m" />

      <Visualisations>
        <Visualisation>
          <VisualisationTitle>Wrocław</VisualisationTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="mg/m3" type="number" domain={[0, 4]} />
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
            </AreaChart>
          </ResponsiveContainer>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Łódź</VisualisationTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="mg/m3" type="number" domain={[0, 4]} />
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
            </AreaChart>
          </ResponsiveContainer>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Kraków</VisualisationTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="mg/m3" type="number" domain={[0, 4]} />
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
            </AreaChart>
          </ResponsiveContainer>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Zakopane</VisualisationTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="mg/m3" type="number" domain={[0, 4]} />
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
            </AreaChart>
          </ResponsiveContainer>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Warszawa</VisualisationTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="mg/m3" type="number" domain={[0, 4]} />
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
            </AreaChart>
          </ResponsiveContainer>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Białystok</VisualisationTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="mg/m3" type="number" domain={[0, 4]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="PdBialWaszyn"
                dot={{ r: 0 }}
                stroke="#337f46"
                type="monotone"
                fill="#337f46"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Rzeszów</VisualisationTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="mg/m3" type="number" domain={[0, 4]} />
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
            </AreaChart>
          </ResponsiveContainer>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Gdańsk</VisualisationTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="mg/m3" type="number" domain={[0, 4]} />
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
            </AreaChart>
          </ResponsiveContainer>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Katowice</VisualisationTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="mg/m3" type="number" domain={[0, 4]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="SlKatoPlebA4"
                dot={{ r: 0 }}
                stroke="#757f33"
                type="monotone"
                fill="#757f33"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Olsztyn</VisualisationTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="mg/m3" type="number" domain={[0, 4]} />
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
            </AreaChart>
          </ResponsiveContainer>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Poznań</VisualisationTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="mg/m3" type="number" domain={[0, 4]} />
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
            </AreaChart>
          </ResponsiveContainer>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Szczecin</VisualisationTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={props.dataset}>
              <XAxis dataKey="date" />
              <YAxis label="mg/m3" type="number" domain={[0, 4]} />
              <Tooltip />
              <CartesianGrid strokeDasharray="30 0" />
              <Area
                activeDot={{ r: 10 }}
                dataKey="ZpSzczPils02"
                dot={{ r: 0 }}
                stroke="#75337f"
                type="monotone"
                fill="#75337f"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Visualisation>
      </Visualisations>
    </div>
  );
};

CO.propTypes = {
  dataset: arrayOf(object).isRequired
};

export default CO;
