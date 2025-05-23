import { useState } from "react";
import LanguagesButtons from "./LanguagesButtons";
import LanguageDescriptionBox from "./LanguageDescriptionBox";

export default function Languages ({ languagesData }) {
    // console.debug('Languages languagesData', languagesData);

    const [ selectedLanguageId, setSelectedLanguageId ] = useState(1);
    // console.debug('LanguagesButtons selectedLanguageId', selectedLanguageId);
    
    const selectedDescription = languagesData.find(languageData => languageData.id === selectedLanguageId).description;
    // console.debug('LanguagesButtons selectedDescription', selectedDescription);

    return (
        <div className="card p-3">
            <LanguagesButtons
            selectedLanguageId={selectedLanguageId}
            setSelectedLanguageId={setSelectedLanguageId}
            buttonsData={languagesData} />
            <LanguageDescriptionBox 
            // selectedLanguageId={selectedLanguageId}
            description={selectedDescription} />
        </div>
    );
}