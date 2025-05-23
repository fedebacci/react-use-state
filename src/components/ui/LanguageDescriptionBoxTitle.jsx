export default function LanguageDescriptionBoxTitle ({ title }) {
    return (
        title && <h6 id="language-description-title" className="fw-bold fs-5">
            {title}
        </h6>
    );
}