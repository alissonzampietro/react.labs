import { configureStore } from '@reduxjs/toolkit';
import regionListReducer from '../features/regions/regionListSlice';
import regionReducer from '../features/regions/regionSlice';

export default configureStore({
    reducer: {
        regionList: regionListReducer,
        region: regionReducer
    }
});