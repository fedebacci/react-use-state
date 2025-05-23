import { useState } from "react";
import LanguageButton from "./LanguageButton";

// const 

export default function LanguagesButtons ({ buttonsData }) {
    // console.debug('LanguagesButtons buttonsData', buttonsData);
    
    const [ selectedLanguageId, setSelectedLanguageId ] = useState(1);
    // console.debug('LanguagesButtons selectedLanguageId', selectedLanguageId);

    return (
        <div id="languages-buttons" className="card p-3">
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