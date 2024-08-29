import { TrendingUp } from 'lucide-react'
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartConfig = {
  remainingCapacity: {
    label: 'Units in container',
    color: 'hsl(var(--chart-1))',
  },
  currentCapacity: {
    label: 'Current Capacity',
    color: 'hsl(var(--chart-2))',
  },
}

// maxCapacity = 100
// currentCapcity = 40
// maxCapcity - currentCapcity == 60

export const RadialChartComponent = ({ maxCapacity, currentCapacity }) => {
  const chartData = [
    {
      data: 'Capacity',
      remainingCapacity: maxCapacity - currentCapacity,
      currentCapacity,
    },
  ]

  return (
    <Card className="flex flex-col w-full h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-md">Radial Chart - Stacked</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0  justify-center h-28">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[210px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {maxCapacity?.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Max Capacity
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="remainingCapacity"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-remainingCapacity)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="currentCapacity"
              stackId="a"
              fill="var(--color-currentCapacity)"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter> */}
    </Card>
  )
}
