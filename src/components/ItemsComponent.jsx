import { CirclePlus } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ItemComponent } from './ItemComponent'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export const ItemsComponent = () => {
  const {
    selectedContainer: { id },
  } = useSelector((state) => state.containers)
  const [item, setItem] = useState({})
  const {
    selectedContainer: { items },
  } = useSelector((state) => state.containers)

  const onHandleInput = (e) => {
    e.preventDefault()
    setItem({ description: e.target.value })
  }

  const onHandleAddButton = () => {}

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          placeholder="Please enter an item"
          onChange={(e) => onHandleInput(e)}
        />
        <Button variant="secondary" type="submit" onClick={onHandleAddButton}>
          Add Item <CirclePlus className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col items-start w-full justify-start mt-6">
        <ItemComponent items={items} />
      </div>
    </div>
  )
}
