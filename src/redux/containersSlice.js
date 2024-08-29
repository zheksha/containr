import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  containersList: [
    {
      id: 101,
      name: 'Storage Box A',
      capacity: 8,
      description: 'A large storage box for keeping household items.',
      dateCreated: '26th Aug, 2024',
      items: [
        {
          id: '1a2b3c',
          description: 'Winter Clothing - Jackets, Scarves, Gloves',
        },
        {
          id: '4d5e6f',
          description: 'Old Books - Novels, Textbooks',
        },
      ],
    },
    {
      id: 102,
      name: 'Tool Chest B',
      capacity: 15,
      description: 'Metal chest containing various tools and hardware.',
      dateCreated: '26th Aug, 2024',
      items: [
        {
          id: '7g8h9i',
          description: 'Power Drill with Bits',
        },
        {
          id: '0j1k2l',
          description: 'Hammer, Screwdrivers, Wrenches',
        },
        {
          id: '3m4n5o',
          description: 'Nails, Screws, Bolts Assortment',
        },
      ],
    },
    {
      id: 103,
      name: 'Kitchen Pantry C',
      capacity: 12,
      description: 'Container for organizing pantry items.',
      dateCreated: '26th Aug, 2024',
      items: [
        {
          id: '6p7q8r',
          description: 'Canned Vegetables - Corn, Peas, Beans',
        },
        {
          id: '9s0t1u',
          description: 'Pasta, Rice, Lentils',
        },
        {
          id: '2v3w4x',
          description: 'Spices - Salt, Pepper, Turmeric, Cumin',
        },
      ],
    },
    {
      id: 104,
      name: 'Garage Bin D',
      capacity: 20,
      description: 'Large bin for storing miscellaneous garage items.',
      dateCreated: '26th Aug, 2024',
      items: [
        {
          id: '5y6z7a',
          description: 'Car Cleaning Supplies - Wax, Polishes',
        },
        {
          id: '8b9c0d',
          description: 'Camping Gear - Tent, Sleeping Bag, Stove',
        },
        {
          id: '1e2f3g',
          description: 'Sports Equipment - Balls, Rackets',
        },
        {
          id: '4h5i6j',
          description: 'Bicycling Tools - Tire Pump, Wrenches',
        },
      ],
    },
    {
      id: 105,
      name: 'Office Supplies E',
      capacity: 5,
      description: 'Box for organizing office stationery and supplies.',
      dateCreated: '26th Aug, 2024',
      items: [
        {
          id: '7k8l9m',
          description: 'Notebooks, Pens, Pencils',
        },
        {
          id: '0n1o2p',
          description: 'Printer Paper, Envelopes',
        },
      ],
    },
  ],
  selectedContainer: {},
}

const containersSlice = createSlice({
  name: 'containers',
  initialState,
  reducers: {
    addContainerAction: (state, action) => {
      state.containersList.push(action.payload)
      return state
    },
    selectedContainerAction: (state, action) => {
      state.selectedContainer = action.payload
      return state
    },
    addItemAction: (state, action) => {
      for (let i = 0; i < state.containersList.length; i++) {
        if (
          state.containersList[i].id === action.payload.selectedContainer.id
        ) {
          state.containersList[i].items.push(action.payload.item)
          state.selectedContainer = state.containersList[i]
          break
        }
      }
      return state
    },
  },
})

export const { addContainerAction, selectedContainerAction, addItemAction } =
  containersSlice.actions

export default containersSlice.reducer
