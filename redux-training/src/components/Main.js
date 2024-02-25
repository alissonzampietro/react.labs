import { useState } from "react";
import CityDetails from "./CityDetails/CityDetails";
import Text from "./Text/Text";

export default function Main() {

    const [region, setRegion] = useState({});

    const keyUp = (code) => {
        fetch(`https://brasilapi.com.br/api/ibge/uf/v1/${code}`).then(response =>response.json()).then(data => {
            if(!data.type) {
                setRegion(data);
            }else {
                setRegion({error: 'Not found'})
            }
        })
        return;
    }

    return <div className="h-screen flex items-center justify-center">
        <div>
            <h1 className="mb-4 text-4xl font-extrabold text-white">Welcome to State find</h1>
            <CityDetails region={region}/>
            <Text keyUp={keyUp}/>
        </div>
    </div>
}