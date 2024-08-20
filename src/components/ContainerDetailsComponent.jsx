/* eslint-disable react/prop-types */
import { RadialChartComponent } from './RadiaChartComponent'

const ContainerDetailsComponent = ({
  name,
  dateCreated,
  description,
  maxCapacity,
  currentCapacity,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      <RadialChartComponent
        maxCapacity={maxCapacity}
        currentCapacity={currentCapacity}
      />
      <div className="text-start">
        <h4 className="mb-8 font-semibold">Container Details</h4>
        <ul>
          <li className="text-sm font-medium leading-none mb-4">
            <strong>Container name:</strong> {name}
          </li>
          <li className="text-sm font-medium leading-none mb-4">
            <strong>Date Created:</strong> {dateCreated}
          </li>
          <li className="text-sm font-medium leading-none mb-4">
            <p className="mb-2 font-semibold">Container Description:</p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContainerDetailsComponent
