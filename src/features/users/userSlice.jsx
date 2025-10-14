import { createSlice  } from "@reduxjs/toolkit";

const initialState=[
    { id: 0, name: 'Tom Larne' },
    { id: 1, name: 'Garry Lean' },
    { id: 2, name: 'John Black' }
]

const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})



export const selectAllUsers =(state)=>state.users;
export default userSlice.reducer