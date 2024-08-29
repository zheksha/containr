import { useSelector } from 'react-redux'
import { RadialChartComponent } from './RadiaChartComponent'
import PrintQR from './PrintQR'

const ContainerDetailsComponent = () => {
  const { selectedContainer } = useSelector((state) => state.containers)
  const { name, dateCreated, description, capacity, items, id } =
    selectedContainer

  return id ? (
    <div className="grid grid-cols-2 gap-4 w-full h-full">
      <RadialChartComponent
        maxCapacity={capacity ? capacity : 0}
        currentCapacity={capacity - items?.length}
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
        <PrintQR selectedContainer={selectedContainer} />
      </div>
    </div>
  ) : (
    <div className="w-full border mt-2 rounded-lg p-3  text-center">
      Select container to see the details
    </div>
  )
}

export default ContainerDetailsComponent
