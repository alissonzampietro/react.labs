import './WordBox.css'

export function WordBox({word, isSelected, exists}) {
    return <div className={`word ${exists ? 'exists' : ''} ${isSelected ? 'selected' : 'normal'}`}>
        {word}
    </div>
}