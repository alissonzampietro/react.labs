import { useState } from "react"
import "./SearchBar.css"

export function SearchBar({maxAccepted, submit}) {
    const [word, setWord] = useState('')

    const submitValidate = (e) => {
        if(e.key == 'Enter') {
            if(!submit) {
                window.alert('SUBMIT NOT DEFINED')
            }
            setWord('')
            submit(word)
        }
    }

    const typing = (e) => {
        if(e.target.value.length <= maxAccepted) {
            setWord(e.target.value)
        }
    }
    return <input name="search-bar" className="input-search" type="text" value={word} onChange={typing} onKeyDown={submitValidate}/>
}