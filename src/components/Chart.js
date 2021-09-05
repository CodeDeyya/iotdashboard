import React from "react";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import {
  BarGraph,
  Container,
  BarChartContainer,
  Number,
  Bar,
} from "../styled-components/styles.js";

const override = css`
  display: block;
  margin: auto;
`;

export default function App({ data, loading }) {
  if (loading) {
    return (
      <Container>
        <BarGraph>
          <ScaleLoader
            color={"#0072D2"}
            loading={loading}
            css={override}
            height={175}
            width={20}
            radius={10}
          />
        </BarGraph>
      </Container>
    );
  } else {
    return (
      <Container>
        <BarGraph>
          {Object.entries(data).map(([label, value], i) => {
            return (
              <BarChartContainer key={i}>
                <Number color={"#0072D2"}>
                  {label} ({value})
                </Number>
                <Bar height={value * 2} colors={["#0072D2", "#051435"]} />
              </BarChartContainer>
            );
          })}
        </BarGraph>
      </Container>
    );
  }
}
