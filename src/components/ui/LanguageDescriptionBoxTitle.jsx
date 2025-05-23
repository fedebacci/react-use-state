export default function LanguageDescriptionBoxTitle ({ title }) {
    return (
        title && <h6 className="fw-bold fs-5">
            {title}
        </h6>
    );
}