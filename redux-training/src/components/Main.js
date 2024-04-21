import { useState } from "react";
import CityDetails from "./CityDetails/CityDetails";
import Text from "./Text/Text";
import { useDispatch, useSelector } from 'react-redux';
import { pushRegion } from "../features/regions/regionListSlice";
import { setRegion } from "../features/regions/regionSlice";

export default function Main() {

    const currentRegion = useSelector((state) => state.region.value);
    const dispatch = useDispatch();

    const keyUp = (code) => {
        fetch(`https://brasilapi.com.br/api/ibge/uf/v1/${code}`).then(response =>response.json()).then(data => {
            if(!data.type) {
                setRegion(data);
                dispatch(pushRegion(data))
                dispatch(setRegion(data))
            }else {
                setRegion({error: 'Not found'})
            }
        })
        return;
    }

    return <div className="h-screen flex items-center justify-center">
        <div>
            <h1 className="mb-4 text-4xl font-extrabold text-white">Welcome to State find</h1>
            <CityDetails region={currentRegion}/>
            <Text keyUp={keyUp}/>
        </div>
    </div>
}