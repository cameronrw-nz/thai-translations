'use client'

import React, { useEffect, useState } from "react";
import { ProcessTranslations, ITranslation } from "../common/translations";
import { Container } from "../common/container";
import Button from "../common/button";
import { Translation, TranslationLanguage } from "../common/translation";

const translations = ProcessTranslations();

export interface ITranslationAnswer {
    translation: ITranslation;
    timesCorrectlyAnswered: number;
    timesIncorrectlyAnswered: number;
}

export function compareTranslations(arr1: ITranslation, arr2: ITranslation): boolean {
    const arr1Th = arr1.thai.sort();
    const arr2Th = arr2.thai.sort();
    const arr1En = arr1.english.sort();
    const arr2En = arr2.english.sort();
    return JSON.stringify(arr1Th) === JSON.stringify(arr2Th)
        && JSON.stringify(arr1En) === JSON.stringify(arr2En);
}

export function Cards() {
    const [isShowingSentence, setIsShowingSentence] = useState<boolean>(true);
    const [isShowingTranslation, setIsShowingTranslation] = useState<boolean>();
    const [translation, setTranslation] = useState<ITranslation>(translations[Math.floor(Math.random() * translations.length)]);
    const [storageTranslations, setStorageTranslations] = useState<ITranslationAnswer[]>([]);

    useEffect(() => {
        const storageTranslations = localStorage.getItem("translations");
        if (storageTranslations) {
            setStorageTranslations(JSON.parse(storageTranslations) ?? []);
        }
    }, []);

    function processAnswer(isCorrect: boolean) {
        let newStorageTranslations = [...storageTranslations]
        const storageTranslationIndex = newStorageTranslations.findIndex(t => compareTranslations(t.translation, translation));

        let newStorageTranslation: ITranslationAnswer | undefined = undefined;
        if (storageTranslationIndex > -1) {
            newStorageTranslation = { ...newStorageTranslations.splice(storageTranslationIndex, 1)[0] };
        }
        else {
            newStorageTranslation = { translation, timesCorrectlyAnswered: 0, timesIncorrectlyAnswered: 0 }
        }

        if (isCorrect) {
            newStorageTranslation.timesCorrectlyAnswered++;
        } else {
            newStorageTranslation.timesIncorrectlyAnswered++;
        }
        newStorageTranslations.push(newStorageTranslation);

        saveStorageTranslations(newStorageTranslations)
        nextTranslation();
    }

    function saveStorageTranslations(newStorageTranslations: ITranslationAnswer[]) {
        setStorageTranslations(newStorageTranslations);
        localStorage.setItem("translations", JSON.stringify(newStorageTranslations));
    }

    function nextTranslation() {
        setTranslation(translations[Math.floor(Math.random() * translations.length)])
        setIsShowingTranslation(false)
    }

    return (
        <Container className="space-y-4 m-1">
            <Container className="space-y-1 h-36">
                <Translation language={TranslationLanguage.Thai} size="large">{translation.thai}</Translation>
                {isShowingSentence ? <Translation language={TranslationLanguage.Thai} size="small">{translation.sentence}</Translation> : null}
                {isShowingTranslation ? <Translation language={TranslationLanguage.English} size="large">{translation.english.join(" / ")}</Translation> : null}
            </Container>
            <div className="space-x-4">
                <Button
                    onClick={() => processAnswer(false)}
                    style="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Wrong
                </Button>
                <Button
                    onClick={() => processAnswer(true)}
                    style="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Correct
                </Button>
            </div>
            <div className="space-x-4">
                <Button onClick={() => setIsShowingTranslation(!isShowingTranslation)}>{isShowingTranslation ? "Hide" : "Show"}</Button>
                <Button onClick={() => setIsShowingSentence(!isShowingSentence)}>Sentence</Button>
                <Button onClick={nextTranslation} isPrimary>Next</Button>
            </div>
        </Container>
    )
}
