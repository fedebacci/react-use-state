import LanguageDescriptionBoxTitle from "./LanguageDescriptionBoxTitle";
import LanguageDescriptionBoxText from "./LanguageDescriptionBoxText";

export default function LanguageDescriptionBox ({ title, description }) {
    return (
        <div id="language-description">
            <LanguageDescriptionBoxTitle title={title} />
            <LanguageDescriptionBoxText text={description} />
        </div>
    );
}