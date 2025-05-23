export default function LanguageButton ({ title, isSelected, handleClick }) {
    // console.debug('LanguageButton title', title);
    // console.debug('LanguageButton isSelected', isSelected);
    // console.debug('LanguageButton handleClick', handleClick);
    return (
        <button onClick={handleClick} className={"me-3 btn " + (isSelected ? 'btn-warning' : 'btn-primary')}>
            {title}
        </button>
    );
}