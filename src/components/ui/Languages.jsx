import LanguagesButtons from "./LanguagesButtons";
import LanguageDescriptionBox from "./LanguageDescriptionBox";

export default function Languages ({ languagesData }) {
    // console.debug('Languages languagesData', languagesData);
    return (
        <>
            {/* <div>
                Languages
            </div> */}
            <LanguagesButtons buttonsData={languagesData} />
            {/* <LanguageDescriptionBox description={languagesData} /> */}
        </>
    );
}