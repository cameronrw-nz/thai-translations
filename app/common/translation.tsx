export enum TranslationLanguage {
    Thai,
    English
}

interface ITranslationProps {
    children?: React.ReactNode;
    language: TranslationLanguage;
    size?: "small" | "large";
    text?: string;
}

export function Translation(props: ITranslationProps) {
    const englishStyles = (props.size === "large" ? "text-xl" : "text-base") + " italic";
    const thaiStyles = props.size === "large" ? "text-6xl" : "text-xl";
    const className = props.language === TranslationLanguage.English ? englishStyles : thaiStyles;

    return (
        <p className={className}>
            {props.text || props.children}
        </p>
    );
}