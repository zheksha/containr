import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  containersList: [
    {
      id: 123,
      name: 'Test',
      capacity: 5,
      description: 'Lorem Ipsum Dolor Sit Amet',
      dateCreated: '26th Aug, 2024',
      items: [
        {
          id: 321,
          description: 'Another Item  Description',
        },
      ],
    },
    {
      id: 345,
      name: 'ABC',
      capacity: 10,
      description: 'Lorem Ipsum Dolor Sit Amet',
      dateCreated: '26th Aug, 2024',
      items: [
        {
          id: 321,
          description: 'Blah Blah Description',
        },
      ],
    },
    {
      id: 678,
      name: 'DEF',
      capacity: 6,
      description: 'Lorem Ipsum Dolor Sit Amet',
      dateCreated: '26th Aug, 2024',
      items: [
        {
          id: 321,
          description: 'Item Description 1',
        },
        {
          id: 321,
          description: 'Item Description 2',
        },
        {
          id: 321,
          description: 'Item Description 3',
        },
      ],
    },
  ],
  selectedContainer: {
    id: 123,
    name: 'Test',
    capacity: 15,
    description: 'Lorem Ipsum Dolor Sit Amet',
    dateCreated: '26th Aug, 2024',
    items: [
      {
        id: 321,
        description: 'Item Description',
      },
      {
        id: 321,
        description: 'Item Description',
      },
      {
        id: 321,
        description: 'Item Description',
      },
    ],
  },
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
      console.log(action.payload)
      return state
    },
  },
})

export const { addContainerAction, selectedContainerAction } =
  containersSlice.actions

export default containersSlice.reducer
