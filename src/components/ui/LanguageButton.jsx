export default function LanguageButton ({ title, isSelected, handleClick }) {
    // console.debug('LanguageButton title', title);
    // console.debug('LanguageButton isSelected', isSelected);
    // console.debug('LanguageButton handleClick', handleClick);
    return (
        <div onClick={handleClick} className={"btn " + (isSelected ? 'btn-warning' : 'btn-primary')}>
            {title}
        </div>
    );
}