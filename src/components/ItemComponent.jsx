import { Trash } from 'lucide-react'
import React from 'react'

const ItemComponent = ({ id, description }) => {
  return (
    <div className="mb-2 flex justify-between items-center w-full">
      <p key={id}>{description}</p>
      <Trash
        className="ml-2 h-4 w-4"
        onClick={() => window.alert('Are you sure')}
      />
    </div>
  )
}

export default ItemComponent
