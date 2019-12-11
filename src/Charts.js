import React  from 'react'
import { Chart, ArgumentAxis, ValueAxis, LineSeries } from "@devexpress/dx-react-chart-material-ui";



export const Charts = () => (
  <Chart
      data={[
        { argument: 1, value: 50 },
        { argument: 2, value: 10 },
        { argument: 3, value: 20 },
        { argument: 4, value: 20 },
        { argument: 5, value: 10 },
        { argument: 6, value: 30 }
      ]}
    >
      <ArgumentAxis />
      <ValueAxis />
      <LineSeries valueField="value" argumentField="argument" />
    </Chart> 
)
