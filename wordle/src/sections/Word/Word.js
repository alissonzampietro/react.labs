import { useEffect, useState } from "react"
import { Tile } from "../../fragments/Tile/Tile"
import './Word.css'

export function Word({word, targetWordSplitted = []}) {
    const [wordMapping, setWordMapping] = useState([]);

    const attributeValues = () => {
        const mapTarget = {};
        let displayWord = [];

        targetWordSplitted.forEach(letter => {
            mapTarget[letter] = mapTarget[letter] ? mapTarget[letter] + 1 : 1;
        })

        word.split('').forEach((letter, pos) => {
            let isSelected = targetWordSplitted[pos] === letter;
            if(isSelected && mapTarget[letter] && mapTarget[letter] > 0) {
                mapTarget[letter] -= 1
            }
            displayWord.push({
                letter: letter,
                isSelected: isSelected,
            })
        })

        displayWord = displayWord.map((item, pos) => {
            const { letter, isSelected } = item;
            let exists = false;
            if (!isSelected && mapTarget[letter] > 0 && targetWordSplitted[pos] !== letter) {
                exists = true;
            }
            
            if(mapTarget[letter] && mapTarget[letter] !== 0) {
                mapTarget[letter] -= 1
            };

            return {...item, exists}

        })

        setWordMapping(displayWord);
    }

    useEffect(() => {
    attributeValues();
    }, [])

    return <div className="list-words">
        {wordMapping.map((item) => {
            return <Tile letter={item.letter} isSelected={item.isSelected} exists={item.exists}/>
        })}
    </div>
}