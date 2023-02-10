import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
    name:"Favourites",
    initialState:{
        favourites:[]
    },
    reducers:{
        getFavourites(state, action){
            state.favourites = action.payload;
        },
        addFavourite(state, action){
            state.favourites = [...state.favourites, action.payload]
            localStorage.setItem("Favourites",JSON.stringify(state.favourites))
        },
        clearFavourites(state, action){
            localStorage.removeItem("Favourites")
            state.favourites=[];
        }
    }
});
export const {getFavourite, addFavourite, clearFavourites} = favouritesSlice.actions;
export default favouritesSlice.reducer;