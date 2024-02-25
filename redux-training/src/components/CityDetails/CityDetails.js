export default function CityDetails({region}) {
    let url = '/assets/images/brasil.png';
    if(typeof region.nome === 'string') {
        let one = region.nome.split(' ');
        url = `/assets/images/${one.at().toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}.png`;
    }

    
    return <>
        {region.error ?? region.error}
        {region.nome && 
            <ul className="px-10">
                <li className="flex items-center justify-center space-between"> 
                    <img src={url} alt="" width="50" /> 
                    <p className="text-lg text-white font-bold px-3">{region?.nome}</p>
                </li>
                <li>
                    <p className="text-lg text-white font-bold">Acronym: {region?.sigla}</p></li>
                <li>
                    <p className="text-lg text-white font-bold">Region: {region?.regiao.nome} - {region?.regiao.sigla}</p>
                </li>
        </ul>}
    </> 
}