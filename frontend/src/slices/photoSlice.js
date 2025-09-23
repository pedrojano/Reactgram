import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from "../services/photoService";


const initialState = {
    photos: [],
    photo: {},
    error: false,
    success: false,
    loading: false,
    message: null
};

// Publish a photo
export const publishPhoto = createAsyncThunk(
    "photo/publish",
    async(photo, tunkAPI) => {
        const token = tunkAPI.getState().auth.user.token;
        const data = await photoService.publishPhoto(photo, token);

        if(data.errors) {
            return tunkAPI.rejectWithValue(data.errors[0]);
        }
        return data;
    }
);

export const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(publishPhoto.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(publishPhoto.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.photo = action.payload;
            state.photos.unshift(state.photo);
            state.message = "Foto publicada com sucesso!";
        })
        .addCase(publishPhoto.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.photo = {};
            state.message = "Erro ao publicar foto!";
        });
  }
});

export const {resetMessage} = photoSlice.actions;
export default photoSlice.reducer;