import { CirclePlus } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ItemComponent } from './ItemComponent'
import { useDispatch, useSelector } from 'react-redux'
import { useState, Fragment } from 'react'
import { addItemAction } from '../redux/containersSlice'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'sonner'
import { formatDate } from '../lib/utils'

export const ItemsComponent = () => {
  const [inputValue, setInputValue] = useState('') // {descriptiom: "text from input"}
  const { selectedContainer } = useSelector((state) => state.containers)
  const { items, name, capacity } = selectedContainer

  const dispatch = useDispatch()

  const onHandleInput = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  const onHandleAddButton = () => {
    if (items.length === capacity) {
      toast.error(`You reached max capacity of your container ${name} `, {
        description: formatDate(Date.now()),
      })
      return
    }

    dispatch(
      addItemAction({
        item: { description: inputValue, id: uuidv4().substring(0, 6) },
        selectedContainer,
      })
    )
    setInputValue('')
    toast.success(`Your item added into container ${name} `, {
      description: formatDate(Date.now()),
    })
  }

  return (
    <div className="flex w-full flex-col">
      {selectedContainer?.id ? (
        <Fragment>
          <div className="flex w-full items-center space-x-2">
            <Input
              value={inputValue}
              type="text"
              placeholder="Please enter an item"
              onChange={(e) => onHandleInput(e)}
            />
            <Button
              variant="secondary"
              type="submit"
              onClick={onHandleAddButton}
              disabled={!inputValue?.length || inputValue.trim().length === 0}
            >
              Add Item <CirclePlus className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-col items-start w-full justify-start mt-6">
            <ItemComponent items={items} />
          </div>
        </Fragment>
      ) : (
        <div className="w-full border mt-2 rounded-lg p-3  text-center">
          Select container to add item
        </div>
      )}
    </div>
  )
}
