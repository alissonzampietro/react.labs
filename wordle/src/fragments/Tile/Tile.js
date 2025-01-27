import './Tile.css'

export function Tile({letter, isSelected, exists}) {
    return <div className={`word ${exists ? 'exists' : ''} ${isSelected ? 'selected' : 'normal'}`}>
        {letter.toUpperCase()}
    </div>
}