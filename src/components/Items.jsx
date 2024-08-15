import { CirclePlus } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import ItemComponent from './ItemComponent'

export const Items = () => {
  const itemsList = [
    { id: 123, description: 'My old Nike shoes' },
    { id: 456, description: '60 Inch TV' },
    { id: 789, description: 'Jewelry' },
  ]

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center space-x-2">
        <Input type="text" placeholder="Please enter an item" />
        <Button variant="secondary" type="submit">
          Add Item <CirclePlus className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col items-start w-full justify-start mt-6">
        {itemsList.map((item) => (
          <ItemComponent
            key={item.id}
            id={item.id}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}
