import { configureStore } from '@reduxjs/toolkit';
import regionListReducer from '../features/regions/regionListSlice';
import regionReducer from '../features/regions/regionSlice';
import loadingRegionSlice from '../features/loading/loadingRegionSlice';

export default configureStore({
    reducer: {
        regionList: regionListReducer,
        region: regionReducer,
        loading: loadingRegionSlice
    }
});