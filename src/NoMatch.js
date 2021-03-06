import React  from 'react'
import { Chart, ArgumentAxis, ValueAxis, LineSeries } from "@devexpress/dx-react-chart-material-ui";

export const NoMatch = () => (
  <Chart
      data={[
        { argument: 1, value: 10 },
        { argument: 2, value: 20 },
        { argument: 3, value: 30 }
      ]}
    >
      <ArgumentAxis />
      <ValueAxis />
      <LineSeries valueField="value" argumentField="argument" />
    </Chart>
)

/*
import { Chart, ArgumentAxis, ValueAxis, LineSeries } from "@devexpress/dx-react-chart-material-ui";
// import { Chart, ArgumentAxis, ValueAxis, LineSeries } from "@devexpress/dx-react-chart-bootstrap4";

const App = () => (
  <Chart
      data={[
        { argument: 1, value: 10 },
        { argument: 2, value: 20 },
        { argument: 3, value: 30 }
      ]}
    >
      <ArgumentAxis />
      <ValueAxis />
      <LineSeries valueField="value" argumentField="argument" />
    </Chart>
);

*/