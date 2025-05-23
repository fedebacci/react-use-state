import LanguageButton from "./LanguageButton";

export default function LanguagesButtons ({ buttonsData, selectedLanguageId, setSelectedLanguageId }) {
    return (
        <div id="languages-buttons" className="mb-4">
            {
                buttonsData.map(buttonData => {
                    return (
                        <LanguageButton 
                        title={buttonData.title} 
                        isSelected={buttonData.id === selectedLanguageId} 
                        handleClick={() => {
                            buttonData.id === selectedLanguageId ? setSelectedLanguageId(0) : setSelectedLanguageId(buttonData.id);
                        }} 
                        key={buttonData.id} />
                    );
                })
            }
        </div>
    );
}