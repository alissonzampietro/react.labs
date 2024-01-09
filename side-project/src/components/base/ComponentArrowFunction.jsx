import { useContext } from "react"
import { Theme } from "../../context/theme"

export default () => {

    let color = useContext(Theme);

    return <>
        <h1>It's an arrow function component, and the theme color is {color}</h1>
    </>
}