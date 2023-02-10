import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
    name:"favourites",
    initialState:{
        favourites:[]
    },
    reducers:{
        getFavourites(state, action){

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
export const {addFavourites, addFavourite} = favouritesSlice.actions;
export default favouritesSlice.reducer;