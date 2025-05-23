export default function LanguageButton ({ title, isSelected, handleClick }) {
    return (
        <button onClick={handleClick} className={"me-3 btn " + (isSelected ? 'btn-warning' : 'btn-primary')}>
            {title}
        </button>
    );
}