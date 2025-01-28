import { fortuneCookiePhrases } from "./FortunieCookie.constants";

export function FortuneCookie({children, message}) {
    return <div>
        <h1>{message}</h1>
        <p>"{fortuneCookiePhrases[Math.floor(Math.random() * fortuneCookiePhrases.length)]}"</p>
        {children}
    </div>
}