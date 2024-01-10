import { capitalize } from "../../utils/string.utils";

export default function ProductList({list}) {
    const headers = Object.keys(list.at(0));
    return <table>
        <tr>
            {headers.map(item => <th>{capitalize(item)}</th>)}
        </tr>
            {list.map(item => {
                return <tr>
                    {headers.map(header => <th>{item[header]}</th>)}
                </tr>
            })}
    </table>
}