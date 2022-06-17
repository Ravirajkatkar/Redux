import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
    'photos/getPhotos',
    async() => {
        const responce =await fetch('https://picsum.photos/v2/list');
        const formattedResponse = await responce.json();
        return formattedResponse;
    }
);

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        photos: [],
        isLoding: false,
    },
    extraReducers: {
        [getPhotos.pending]: (state) => {
            state.isLoding = true;
        },
        [getPhotos.fulfilled]: (state, action) => {
            state.photos = action.payload;
            state.isLoding = false; 
        },
        [getPhotos.rejected]: (state) => {
            state.isLoding = false;
        }    
    }
});

export default gallerySlice.reducer;