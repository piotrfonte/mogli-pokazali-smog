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

const PM25 = props => {
  const arr = props.dataset;
  const countOverexposureDays = location =>
    size(
      filter(
        groupBy(arr, o => o.date),
        (value, key) =>
          maxBy(value, o2 => o2[location])[location] > 36 ? key : null
      )
    );

  return (
    <div>
      <Copy>
        <h2 className="h2">Comparison PM2.5</h2>
      </Copy>
      <Separator silent size="m" />

      <VisualisationTitle>Gdańsk vs. Kraków</VisualisationTitle>
      <ComparisonChart
        dataset={props.dataset}
        domain={[0, 250]}
        key1="MpKrakAlKras"
        key1Col="#8ecc50"
        key2="PmGdaLeczk08"
        key2Col="#cb51ad"
        baseVal={36}
        unit="ug/m3"
      />

      <Separator silent size="l" />
      <Copy>
        <h2 className="h2">Individual PM2.5</h2>
      </Copy>
      <Separator silent size="m" />

      <Visualisations>
        <Visualisation>
          <VisualisationTitle>Wrocław</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 250]}
            subset="DsWrocWybCon"
            keyCol="#cc5151"
            unit="ug/m3"
            baseVal={36}
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
            domain={[0, 250]}
            subset="LdLodzGdansk"
            keyCol="#52cccc"
            unit="ug/m3"
            baseVal={36}
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
            domain={[0, 250]}
            subset="MpKrakAlKras"
            keyCol="#8ecc50"
            unit="ug/m3"
            baseVal={36}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("MpKrakAlKras")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Zakopane</VisualisationTitle>
          No data
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Warszawa</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 250]}
            subset="MzWarMarszal"
            keyCol="#cbad50"
            unit="ug/m3"
            baseVal={36}
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
            domain={[0, 250]}
            subset="PdBialWaszyn"
            keyCol="#337f46"
            unit="ug/m3"
            baseVal={36}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("PdBialWaszyn")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Rzeszów</VisualisationTitle>
          No data
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Gdańsk</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 250]}
            subset="PmGdaLeczk08"
            keyCol="#cb51ad"
            unit="ug/m3"
            baseVal={36}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("PmGdaLeczk08")}
            </p>
          </Copy>
        </Visualisation>
        <Visualisation>
          <VisualisationTitle>Katowice</VisualisationTitle>
          <SingleChart
            dataset={props.dataset}
            domain={[0, 250]}
            subset="SlKatoKossut"
            keyCol="#757f33"
            unit="ug/m3"
            baseVal={36}
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
            domain={[0, 250]}
            subset="WmOlsPuszkin"
            keyCol="#7f4134"
            unit="ug/m3"
            baseVal={36}
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
            domain={[0, 250]}
            subset="WpPoznPolank"
            keyCol="#3c3380"
            unit="ug/m3"
            baseVal={36}
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
            domain={[0, 250]}
            subset="ZpSzczAndr01"
            keyCol="#75337f"
            unit="ug/m3"
            baseVal={36}
          />
          <Copy>
            <p className="txt4">
              Dni ponad normę: {countOverexposureDays("ZpSzczAndr01")}
            </p>
          </Copy>
        </Visualisation>
      </Visualisations>
    </div>
  );
};

PM25.propTypes = {
  dataset: arrayOf(object).isRequired
};

export default PM25;
