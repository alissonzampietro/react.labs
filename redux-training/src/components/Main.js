import { useState } from "react";
import CityDetails from "./CityDetails/CityDetails";
import Text from "./Text/Text";
import { useDispatch, useSelector } from 'react-redux';
import { pushRegion } from "../features/regions/regionListSlice";
import { setRegion } from "../features/regions/regionSlice";
import { isLoading, loaded } from "../features/loading/loadingRegionSlice";
import { Loading } from "./Loading/loading";

export default function Main() {

    const currentRegion = useSelector((state) => state.region.value);
    const regionList = useSelector((state) => state.regionList.value);
    const loading = useSelector((state) => state.loading.value);
    const dispatch = useDispatch();

    const keyUp = (code) => {
        dispatch(isLoading());
        let result = regionList.find(list => list.sigla === code.toUpperCase());

        if(result) {
            dispatch(setRegion(result))
            dispatch(loaded());
            return;
        }

        fetch(`https://brasilapi.com.br/api/ibge/uf/v1/${code}`).then(response =>response.json()).then(data => {
            dispatch(loaded());
            if(!data.type) {
                dispatch(pushRegion(data))
                dispatch(setRegion(data))
            }else {
                dispatch(setRegion({error: 'Not found'}));
            }
        })
        return;
    }

    return <div className="h-screen flex items-center justify-center">
        <div>
            <h1 className="mb-4 text-4xl font-extrabold text-white mb-5">Welcome to State find</h1>
            {loading && <Loading/>}
            {!loading && <CityDetails region={currentRegion}/>}
            <br />
            <Text keyUp={keyUp}/>
        </div>
    </div>
}