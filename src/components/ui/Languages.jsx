import { useState } from "react";
import LanguagesButtons from "./LanguagesButtons";
import LanguageDescriptionBox from "./LanguageDescriptionBox";

export default function Languages ({ languagesData }) {

    const [ selectedLanguageId, setSelectedLanguageId ] = useState(0);
    const selectedLanguage = languagesData.find(languageData => languageData.id === selectedLanguageId);

    return (
        <div id="languages">

            <LanguagesButtons
            selectedLanguageId={selectedLanguageId}
            setSelectedLanguageId={setSelectedLanguageId}
            buttonsData={languagesData} />

            <LanguageDescriptionBox 
            title={selectedLanguage?.title}
            description={selectedLanguage?.description} />

        </div>
    );
}