import React from "react";
import { object } from "prop-types";
import { flatMap } from "lodash";

import Page from "../components/Page";

import SO2 from "../partials/so2";
import Header from "../partials/header";

const SO2Page = ({ data }) => {
  console.log(data);
  const dataset = flatMap(data.allData2016So2Csv.edges, item => {
    const key = {
      date: item.node.date,
      time: item.node.time,
      DsWrocWybCon: Number(item.node.DsWrocWybCon),
      LdLodzGdansk: Number(item.node.LdLodzGdansk),
      MpKrakBujaka: Number(item.node.MpKrakBujaka),
      MpKrakBulwar: Number(item.node.MpKrakBulwar),
      MpZakopaSien: Number(item.node.MpZakopaSien),
      MzWarKondrat: Number(item.node.MzWarKondrat),
      MzWarWokalna: Number(item.node.MzWarWokalna),
      PdBialWaszyn: Number(item.node.PdBialWaszyn),
      PkRzeszRejta: Number(item.node.PkRzeszRejta),
      PmGdaWyzwo03: Number(item.node.PmGdaWyzwo03),
      SlKatoKossut: Number(item.node.SlKatoKossut),
      WmOlsPuszkin: Number(item.node.WmOlsPuszkin),
      WpPoznPolank: Number(item.node.WpPoznPolank),
      ZpSzczPils02: Number(item.node.ZpSzczPils02)
    };
    return key;
  });
  return (
    <Page>
      <Header />
      <SO2 dataset={dataset} />
    </Page>
  );
};

SO2Page.propTypes = {
  data: object.isRequired
};

export default SO2Page;

export const SO2Query = graphql`
  query SO2Query {
    allData2016So2Csv {
      edges {
        node {
          time
          date
          DsWrocWybCon
          LdLodzGdansk
          MpKrakBujaka
          MpKrakBulwar
          MpZakopaSien
          MzWarKondrat
          MzWarWokalna
          PdBialWaszyn
          PkRzeszRejta
          PmGdaWyzwo03
          SlKatoKossut
          WmOlsPuszkin
          WpPoznPolank
          ZpSzczPils02
        }
      }
    }
  }
`;
