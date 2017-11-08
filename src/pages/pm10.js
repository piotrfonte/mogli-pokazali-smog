import React from "react";
import { object } from "prop-types";
import { flatMap } from "lodash";

import Page from "../components/Page";

import PM10 from "../partials/pm10";
import Header from "../partials/header";

const PM10Page = ({ data }) => {
  const dataset = flatMap(data.allData2016Pm10Csv.edges, item => {
    const key = {
      date: item.node.date,
      time: item.node.time,
      DsWrocWybCon: Number(item.node.DsWrocWybCon),
      LdLodzGdansk: Number(item.node.LdLodzGdansk),
      MpKrakAlKras: Number(item.node.MpKrakAlKras),
      MpZakopaSien: Number(item.node.MpZakopaSien),
      MzWarMarszal: Number(item.node.MzWarMarszal),
      PdBialWarsza: Number(item.node.PdBialWarsza),
      PkRzeszRejta: Number(item.node.PkRzeszRejta),
      PmGdaWyzwo03: Number(item.node.PmGdaWyzwo03),
      SlKatoKossut: Number(item.node.SlKatoKossut),
      WmOlsPuszkin: Number(item.node.WmOlsPuszkin),
      WpPoznPolank: Number(item.node.WpPoznPolank),
      ZpSzczLacz04: Number(item.node.ZpSzczLacz04)
    };
    return key;
  });
  return (
    <Page>
      <Header />
      <PM10 dataset={dataset} />
    </Page>
  );
};

PM10Page.propTypes = {
  data: object.isRequired
};

export default PM10Page;

export const PM10Query = graphql`
  query PM10Query {
    allData2016Pm10Csv {
      edges {
        node {
          time
          date
          DsWrocWybCon
          LdLodzGdansk
          MpKrakAlKras
          MpZakopaSien
          MzWarMarszal
          PdBialWarsza
          PkRzeszRejta
          PmGdaWyzwo03
          SlKatoKossut
          WmOlsPuszkin
          WpPoznPolank
          ZpSzczLacz04
        }
      }
    }
  }
`;
