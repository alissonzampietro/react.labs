import { fortuneCookiePhrases } from "./FortunieCookie.constants";

export function FortuneCookie() {
    return <p>"{fortuneCookiePhrases[Math.floor(Math.random() * fortuneCookiePhrases.length)]}"</p>
}