import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { CirclePlus, Plus } from 'lucide-react'
import { Textarea } from './ui/textarea'
import { Checkbox } from './ui/checkbox'
import { useDispatch, useSelector } from 'react-redux'
import {
  addContainerAction,
  selectedContainerAction,
} from '../redux/containersSlice'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { formatDate } from '../lib/utils'
import { toast } from 'sonner'
import { updateUserData } from '../firebase/firestore'
import { useEffect } from 'react'

export const ContainersComponent = () => {
  const { containersList, selectedContainer } = useSelector(
    (state) => state.containers
  )
  const dispatch = useDispatch()
  const [details, setDetails] = useState({
    name: '',
    capacity: '',
    description: '',
    items: [],
  })

  const onInputChange = (e, target) => {
    e.preventDefault()
    setDetails({ ...details, [target]: e.target.value })
  }

  const onHandleAddContainer = () => {
    dispatch(
      addContainerAction({
        ...details,
        capacity: Math.abs(details.capacity),
        id: uuidv4().substring(0, 5),
        dateCreated: formatDate(Date.now()),
      })
    )
    setDetails({ name: '', capacity: '', description: '' })
    toast.success(`Your container was added`, {
      description: formatDate(Date.now()),
    })
  }

  const onHandleCheckBox = (el) => {
    dispatch(selectedContainerAction(el))
  }

  useEffect(() => {
    if (containersList.length > 0) {
      updateUserData({ containers: containersList })
    }
  }, [containersList])

  return (
    <div className="grid grid-cols-2 w-full text-start">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Containers
      </h4>

      <Popover>
        {/** Main button that triggers popover */}
        <PopoverTrigger asChild>
          <Button className="w-fit ml-auto" variant="secondary">
            Add Container <CirclePlus className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-96">
          <div className="grid gap-4">
            {/** Header and subheader */}
            <div className="space-y-2 mb-2">
              <h4 className="font-medium leading-none">Container details</h4>
              <p className="text-sm text-muted-foreground">
                Add details for your container.
              </p>
            </div>

            {/** Name input */}
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-start gap-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={details.name}
                  className="col-span-2 h-8"
                  onChange={(e) => {
                    onInputChange(e, 'name')
                  }}
                />
              </div>

              {/** Capacity input */}
              <div className="grid grid-cols-3 items-start gap-4">
                <Label htmlFor="capacity">Capacity</Label>
                <Input
                  id="capacity"
                  value={details.capacity}
                  type="number"
                  defaultValue={20}
                  className="col-span-2 h-8"
                  onChange={(e) => {
                    onInputChange(e, 'capacity')
                  }}
                />
              </div>

              {/** Description text area */}
              <div className="grid grid-cols-3 items-start gap-4">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={details.description}
                  className="col-span-2 h-8"
                  placeholder="Type your message here."
                  onChange={(e) => {
                    onInputChange(e, 'description')
                  }}
                />
              </div>

              {/** Button to submit */}
              <div className="flex justify-end mt-2">
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={onHandleAddContainer}
                  disabled={!details?.name || !details?.capacity}
                >
                  Add <Plus className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {containersList?.map((container, i) => {
        const isSelected = container.id === selectedContainer.id
        return (
          <div
            key={i}
            className={`col-span-2 w-full border mt-2 rounded-lg p-3 flex items-center gap-3 dark:hover:bg-slate-800 hover:bg-slate-200 ${
              isSelected ? 'dark:bg-slate-800 bg-slate-200 ' : ''
            }`}
          >
            <Checkbox
              id="terms"
              checked={isSelected}
              onClick={() => onHandleCheckBox(container)}
            />
            <p htmlFor="terms">{container.name}</p>
          </div>
        )
      })}
    </div>
  )
}
