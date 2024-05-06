import React, { useState } from "react";
import { ITranslation, ProcessTranslations } from "../common/translations";
import { Translation, TranslationLanguage } from "../common/translation";
import Button from "../common/button";

interface ITranslationToShowProps {
    onPress?: () => void;
    translation?: ITranslation;
}

const translations = ProcessTranslations();

export function TranslationToShow(props: ITranslationToShowProps) {
    const [isShowingSentences, setIsShowingSentences] = useState<boolean>()
    if (!props.translation) {
        return null;
    }

    let sentences: string[] = [];

    translations.forEach(translation => {
        if (props.translation?.thai.find(word => translation.words.includes(word)) !== undefined) {
            sentences.push(translation.sentence);
        }
    })

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center overflow-hidden">
            <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="background rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <span>
                        <span>{props.translation.thai.join(" / ")}</span>{" - " + props.translation.english.join(" / ")}
                    </span>
                    <div>
                        <div className="overflow-auto">
                            {isShowingSentences && sentences.map(sentence => {
                                return (
                                    <Translation key={sentence} language={TranslationLanguage.Thai}>
                                        {sentence}
                                    </Translation>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 sm:px-6 sm:flex space-x-4">
                    <Button onClick={() => setIsShowingSentences(!isShowingSentences)}>{isShowingSentences ? "Hide" : "Show"}</Button>
                    <Button onClick={() => props.onPress && props.onPress()} isPrimary>Close</Button>
                </div>
            </div>
        </div>
    )
}