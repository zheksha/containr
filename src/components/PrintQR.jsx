import QRCode from 'react-qr-code'
import ReactToPrint from 'react-to-print'
import { Button } from './ui/button'
import { PrinterIcon } from 'lucide-react'
import { useRef } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

const PrintQR = ({ selectedContainer }) => {
  const { name, description, dateCreated, id } = selectedContainer
  const componentRef = useRef()
  return (
    <div className="h-auto my-0 mx-auto max-w-[100px] w-full flex flex-col">
      <QRCode
        size={256}
        style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        value={`https://containr.netlify.app/view/${id}`}
        viewBox={`0 0 256 256`}
      />

      <ReactToPrint
        trigger={() => (
          <Button variant="link">
            Print <PrinterIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
        content={() => componentRef.current}
      />

      <div
        className=" w-full flex flex-col justify-center items-center hidden-on-screen"
        ref={componentRef}
      >
        <Card className="w-1/2 mx-auto mt-5">
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <QRCode
              size={256}
              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
              value={'https://containr.netlify.app/'}
              viewBox={`0 0 256 256`}
            />
          </CardContent>
          <CardFooter>
            <p>{dateCreated}</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default PrintQR
