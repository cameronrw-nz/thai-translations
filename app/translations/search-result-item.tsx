import React from "react";
import { ITranslation } from "../common/translations";
import { Translation, TranslationLanguage } from "../common/translation";
import { ITranslationAnswer } from "../practice/cards";

interface ISearchListItemProps {
    item: ITranslation;
    isShowingScore?: boolean;
    storageTranslation?: ITranslationAnswer;
}

export function SearchListItem(props: ISearchListItemProps) {
    const totalAnswers = props.storageTranslation
        ? props.storageTranslation?.timesCorrectlyAnswered + props.storageTranslation?.timesIncorrectlyAnswered
        : 0;
    const correctPercentage = totalAnswers === 0 || !props.storageTranslation
        ? 0
        : Math.floor((props.storageTranslation.timesCorrectlyAnswered / totalAnswers) * 100);

    let percentageBar = undefined;
    if (totalAnswers > 0) {
        percentageBar = (
            <div className="absolute bottom-0 left-0 h-1 w-full flex" style={{ display: props.isShowingScore ? undefined : "none" }}>
                <div className="h-full w-full bg-green-500" style={{ width: correctPercentage + "%" }} />
                <div className="h-full w-full bg-red-500" style={{ width: 100 - correctPercentage + "%" }} />
            </div>
        );
    }
    else {
        percentageBar = (
            <div
                className="absolute bottom-0 left-0 h-1 w-full bg-blue-400"
                style={{ display: props.isShowingScore ? undefined : "none" }}>
            </div>
        );
    }

    return (
        <div className="mx-2 relative">
            <div className="space-y-1 py-1">
                <Translation language={TranslationLanguage.Thai} >
                    {props.item.thai.join(" / ")}
                </Translation>
                <Translation language={TranslationLanguage.English}>
                    {props.item.english.join(" / ")}
                </Translation>
            </div>
            {percentageBar}
        </div>
    );
}