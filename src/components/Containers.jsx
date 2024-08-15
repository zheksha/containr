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

export const Containers = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Containers
      </h4>

      <Popover>
        {/** Main button that triggers popover */}
        <PopoverTrigger asChild>
          <Button variant="outline">
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
                <Input id="name" className="col-span-2 h-8" />
              </div>

              {/** Capacity input */}
              <div className="grid grid-cols-3 items-start gap-4">
                <Label htmlFor="capacity">Capacity</Label>
                <Input
                  id="capacity"
                  defaultValue={20}
                  className="col-span-2 h-8"
                />
              </div>

              {/** Description text area */}
              <div className="grid grid-cols-3 items-start gap-4">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  className="col-span-2 h-8"
                  placeholder="Type your message here."
                />
              </div>

              {/** Button to submit */}
              <div className="flex justify-end mt-2">
                <Button variant="secondary">
                  Add <Plus className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
