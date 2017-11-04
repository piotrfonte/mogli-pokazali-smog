import React from "react";
import { object } from "prop-types";
import { flatMap } from "lodash";

import Chart from "../partials/Chart";

const HomePage = ({ data }) => {
  const dataset = flatMap(data.allCo2016NCsv.edges, item => {
    const key = {
      time: item.node.time,
      gda: Number(item.node.PmGdaPoWie01CO1g),
      elb: Number(item.node.WmElbBazynskCO1g)
    };
    return key;
  });
  return (
    <div>
      <Chart dataset={dataset} />
    </div>
  );
};

HomePage.propTypes = {
  data: object.isRequired
};

export default HomePage;

export const HomePageQuery = graphql`
  query HomePageQuery {
    allCo2016NCsv {
      edges {
        node {
          time
          PmGdaPoWie01CO1g
          WmElbBazynskCO1g
        }
      }
    }
  }
`;
