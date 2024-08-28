import { useSelector } from 'react-redux'
import { RadialChartComponent } from './RadiaChartComponent'
import QRCode from 'react-qr-code'

const ContainerDetailsComponent = () => {
  const { name, dateCreated, description, capacity, items } = useSelector(
    (state) => state.containers.selectedContainer
  )

  return (
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
        <div
          style={{
            height: 'auto',
            margin: '0 auto',
            maxWidth: 100,
            width: '100%',
          }}
        >
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={'https://containr.netlify.app/'}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    </div>
  )
}

export default ContainerDetailsComponent
