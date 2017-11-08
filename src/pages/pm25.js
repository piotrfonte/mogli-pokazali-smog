import React from "react";
import { object } from "prop-types";
import { flatMap } from "lodash";

import Page from "../components/Page";

import PM25 from "../partials/pm25";
import Header from "../partials/header";

const PM25Page = ({ data }) => {
  const dataset = flatMap(data.allData2016Pm25Csv.edges, item => {
    const key = {
      date: item.node.date,
      time: item.node.time,
      DsWrocWybCon: Number(item.node.DsWrocWybCon),
      LdLodzGdansk: Number(item.node.LdLodzGdansk),
      MpKrakAlKras: Number(item.node.MpKrakAlKras),
      MzWarMarszal: Number(item.node.MzWarMarszal),
      PdBialWaszyn: Number(item.node.PdBialWaszyn),
      PmGdaLeczk08: Number(item.node.PmGdaLeczk08),
      SlKatoKossut: Number(item.node.SlKatoKossut),
      WmOlsPuszkin: Number(item.node.WmOlsPuszkin),
      WpPoznPolank: Number(item.node.WpPoznPolank),
      ZpSzczAndr01: Number(item.node.ZpSzczAndr01)
    };
    return key;
  });
  return (
    <Page>
      <Header />
      <PM25 dataset={dataset} />
    </Page>
  );
};

PM25Page.propTypes = {
  data: object.isRequired
};

export default PM25Page;

export const PM25Query = graphql`
  query PM25Query {
    allData2016Pm25Csv {
      edges {
        node {
          time
          date
          DsWrocWybCon
          LdLodzGdansk
          MpKrakAlKras
          MzWarMarszal
          PdBialWaszyn
          PmGdaLeczk08
          SlKatoKossut
          WmOlsPuszkin
          WpPoznPolank
          ZpSzczAndr01
        }
      }
    }
  }
`;
