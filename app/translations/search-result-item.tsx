import React from "react";
import { ITranslation } from "../common/translations";
import { Translation, TranslationLanguage } from "../common/translation";

interface ISearchListItemProps {
    item: ITranslation
}

export function SearchListItem(props: ISearchListItemProps) {
    return (
        <div className="space-y-1 mx-2">
            <Translation language={TranslationLanguage.Thai} >
                {props.item.thai.join(" / ")}
            </Translation>
            <Translation language={TranslationLanguage.English}>
                {props.item.english.join(" / ")}
            </Translation>
        </div>
    );
}