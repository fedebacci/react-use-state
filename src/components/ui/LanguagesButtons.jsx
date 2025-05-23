import LanguageButton from "./LanguageButton";

export default function LanguagesButtons ({ buttonsData, selectedLanguageId, setSelectedLanguageId }) {
    return (
        <div id="languages-buttons" className="mb-3">
            {
                buttonsData.map(buttonData => {
                    return (
                        <LanguageButton 
                        title={buttonData.title} 
                        isSelected={buttonData.id === selectedLanguageId} 
                        handleClick={() => setSelectedLanguageId(buttonData.id)} 
                        key={buttonData.id} />
                    );
                })
            }
        </div>
    );
}