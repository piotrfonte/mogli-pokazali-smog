import css from "styled-components";
import React from "react";
import { arrayOf, object } from "prop-types";
import { filter, size, groupBy, maxBy } from "lodash";

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

const SO2 = props => {
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
        <h2 className="h2">Comparison SO2</h2>
      </Copy>
      <Separator silent size="m" />

      <VisualisationTitle>Gdańsk vs. Kraków</VisualisationTitle>
      <ComparisonChart
        dataset={props.dataset}
        domain={[0, 150]}
        key1="MpKrakBujaka"
        key1Col="#8ecc50"
        key2="PmGdaWyzwo03"
        key2Col="#cb51ad"
        unit="ug/m3"
      />

      <Separator silent size="l" />
      <Copy>
        <h2 className="h2">Individual SO2</h2>
      </Copy>
      <Separator silent size="m" />

      <Visualisations>
        <Visualisation>
          <VisualisationTitle>Wrocław</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 150]}
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
            domain={[0, 150]}
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
            domain={[0, 150]}
            subset="MpKrakBujaka"
            keyCol="#8ecc50"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("MpKrakBujaka")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Zakopane</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 150]}
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
            domain={[0, 150]}
            subset="MzWarKondrat"
            keyCol="#cbad50"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("MzWarKondrat")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Białystok</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 150]}
            subset="PdBialWaszyn"
            keyCol="#337f46"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("PdBialWaszyn")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Rzeszów</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 150]}
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
            domain={[0, 150]}
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
            domain={[0, 150]}
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
            domain={[0, 150]}
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
            domain={[0, 150]}
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
            domain={[0, 150]}
            subset="ZpSzczPils02"
            keyCol="#75337f"
            unit="ug/m3"
            baseVal={50}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("ZpSzczPils02")}
            </p>
          </Copy>
        </Visualisation>
      </Visualisations>
    </div>
  );
};

SO2.propTypes = {
  dataset: arrayOf(object).isRequired
};

export default SO2;
