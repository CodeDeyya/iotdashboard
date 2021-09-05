import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 100px;
  margin-top: 100px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: auto;
  border: 3px solid #051435;
`;

export const BarGraph = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const Loader = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  background-color: #051435;
  justify-content: center;
`;

export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Chart = css`
  margin-top: 10px;
  width: 56px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    width: 34px;
  }
`;

export const Number = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.color};
`;

export const Bar = styled.div`
  height: ${(props) => props.height}%;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.colors[0]},
    ${(props) => props.colors[1]}
  );
  ${Chart};
`;
