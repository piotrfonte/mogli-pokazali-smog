import React from "react";
import { arrayOf, object } from "prop-types";
import css from "styled-components";
import { filter, size, groupBy, maxBy } from "lodash";
import {
  AreaChart,
  Area,
  XAxis,
  ReferenceLine,
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

const PM10 = props => {
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
      <Copy>
        <h2 className="h2">Comparison PM10</h2>
      </Copy>
      <Separator silent size="m" />

      <VisualisationTitle>Gdańsk vs. Kraków</VisualisationTitle>
      <ComparisonChart
        dataset={props.dataset}
        domain={[0, 400]}
        key1="MpKrakAlKras"
        key1Col="#8ecc50"
        key2="PmGdaWyzwo03"
        key2Col="#cb51ad"
        unit="ug/m3"
      />

      <Separator silent size="l" />
      <Copy>
        <h2 className="h2">Individual PM10</h2>
      </Copy>
      <Separator silent size="m" />

      <Visualisations>
        <Visualisation>
          <VisualisationTitle>Wrocław</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 400]}
            subset="DsWrocWybCon"
            keyCol="#cc5151"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("DsWrocWybCon")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Łódź</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 400]}
            subset="LdLodzGdansk"
            keyCol="#52cccc"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("LdLodzGdansk")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Kraków</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 400]}
            subset="MpKrakAlKras"
            keyCol="#8ecc50"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("MpKrakAlKras")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Zakopane</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 400]}
            subset="MpZakopaSien"
            keyCol="#8e51cc"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("MpZakopaSien")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Warszawa</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 400]}
            subset="MzWarMarszal"
            keyCol="#cbad50"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("MzWarMarszal")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Białystok</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 400]}
            subset="PdBialWarsza"
            keyCol="#337f46"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("PdBialWarsza")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Rzeszów</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 400]}
            subset="PkRzeszRejta"
            keyCol="#5170cc"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("PkRzeszRejta")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Gdańsk</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 400]}
            subset="PmGdaWyzwo03"
            keyCol="#cb51ad"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("PmGdaWyzwo03")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Katowice</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 400]}
            subset="SlKatoKossut"
            keyCol="#757f33"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("SlKatoKossut")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Olsztyn</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 400]}
            subset="WmOlsPuszkin"
            keyCol="#7f4134"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("WmOlsPuszkin")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Poznań</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 400]}
            subset="WpPoznPolank"
            keyCol="#3c3380"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("WpPoznPolank")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Szczecin</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 400]}
            subset="ZpSzczLacz04"
            keyCol="#75337f"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("ZpSzczLacz04")}
            </p>
          </Copy>
        </Visualisation>
      </Visualisations>
    </div>
  );
};

PM10.propTypes = {
  dataset: arrayOf(object).isRequired
};

export default PM10;
