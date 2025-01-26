import './WordBox.css'

export function WordBox({word, isSelected}) {
    return <div className={`word ${isSelected ? 'selected' : 'normal'}`}>
        {word}
    </div>
}