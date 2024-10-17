import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        insertUser : (state, action) => {
            console.log('=====');
            console.log(action.payload);
            var record = action.payload;

            var newValue = [...state.value, ...record];
            console.log('newvalue');
            console.log(newValue);
            state.value=newValue
        },
        addValueOnButtonClick(state, action) {
            console.log('============');
            console.log(action.payload);
            var newValue = [...state.value, action.payload];
            state.value = newValue;
        }
    },
})

// Action creators are generated for each case reducer function
export const { insertUser  ,addValueOnButtonClick} = userSlice.actions

export default userSlice.reducer