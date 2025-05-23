export default function LanguageDescriptionBoxText ({ text }) {
    return (
        <p id="language-description-text" className="mb-0">
            {text || 'Nessun linguaggio è selezionato'}
        </p>
    );
}