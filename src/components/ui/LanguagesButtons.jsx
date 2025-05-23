import LanguageButton from "./LanguageButton";

// const 

export default function LanguagesButtons ({ buttonsData, selectedLanguageId, setSelectedLanguageId }) {
    // console.debug('LanguagesButtons buttonsData', buttonsData);
    // console.debug('LanguagesButtons selectedLanguageId', selectedLanguageId);
    // console.debug('LanguagesButtons setSelectedLanguageId', setSelectedLanguageId);

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