import React from "react";
import { arrayOf, object } from "prop-types";
import css from "styled-components";
import {
  AreaChart,
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
import SingleChart from "../charts/singleChart";

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
          <SingleChart
            dataset={props.dataset}
            domain={[0, 4]}
            subset="DsWrocWybCon"
            keyCol="#cc5151"
            unit="mg/m3"
          />
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Łódź</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 4]}
            subset="LdLodzGdansk"
            keyCol="#52cccc"
            unit="mg/m3"
          />
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Kraków</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 4]}
            subset="MpKrakAlKras"
            keyCol="#8ecc50"
            unit="mg/m3"
          />
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Zakopane</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 4]}
            subset="MpZakopaSien"
            keyCol="#8e51cc"
            unit="mg/m3"
          />
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Warszawa</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 4]}
            subset="MzWarMarszal"
            keyCol="#cbad50"
            unit="mg/m3"
          />
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Białystok</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 4]}
            subset="PdBialWaszyn"
            keyCol="#337f46"
            unit="mg/m3"
          />
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Rzeszów</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 4]}
            subset="PkRzeszRejta"
            keyCol="#5170cc"
            unit="mg/m3"
          />
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Gdańsk</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 4]}
            subset="PmGdaWyzwo03"
            keyCol="#cb51ad"
            unit="mg/m3"
          />
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Katowice</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 4]}
            subset="SlKatoPlebA4"
            keyCol="#757f33"
            unit="mg/m3"
          />
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Olsztyn</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 4]}
            subset="WmOlsPuszkin"
            keyCol="#7f4134"
            unit="mg/m3"
          />
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Poznań</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 4]}
            subset="WpPoznPolank"
            keyCol="#3c3380"
            unit="mg/m3"
          />
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Szczecin</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 4]}
            subset="ZpSzczPils02"
            keyCol="#75337f"
            unit="mg/m3"
          />
        </Visualisation>
      </Visualisations>
    </div>
  );
};

CO.propTypes = {
  dataset: arrayOf(object).isRequired
};

export default CO;
