import LanguageDescriptionBoxTitle from "./LanguageDescriptionBoxTitle";
import LanguageDescriptionBoxText from "./LanguageDescriptionBoxText";

export default function LanguageDescriptionBox ({ title, description }) {
    return (
        <div id="language-description-box" className="card p-3 shadow">
            <LanguageDescriptionBoxTitle title={title} />
            <LanguageDescriptionBoxText text={description} />
        </div>
    );
}