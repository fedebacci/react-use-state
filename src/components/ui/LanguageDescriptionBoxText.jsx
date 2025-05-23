export default function LanguageDescriptionBoxText ({ text }) {
    return (
        <p className="mb-0">
            {text || 'Nessun linguaggio è selezionato'}
        </p>
    );
}