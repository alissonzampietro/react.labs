import { WordBox } from "../../fragments/WorldBox/WordBox"
import './ShowWord.css'

export function ShowWord({word, rightWords = []}) {
    return <div className="list-words">
        {word.split('').map((item, pos) => {
            let isSelected = item.toLowerCase() == rightWords[pos].toLowerCase();
            return <WordBox word={item.toUpperCase()} isSelected={isSelected}/>
        })}
    </div>
}