'use client'

import React, { useState } from "react";
import { ProcessTranslations, ITranslation } from "../common/translations";
import { Container } from "../common/container";
import Button from "../common/button";
import { Translation, TranslationLanguage } from "../common/translation";

const translations = ProcessTranslations();

export function Cards() {
    const [isShowingSentence, setIsShowingSentence] = useState<boolean>(true);
    const [isShowingTranslation, setIsShowingTranslation] = useState<boolean>();
    const [translation, setTranslation] = useState<ITranslation>(translations[Math.floor(Math.random() * translations.length)]);

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
                <Button onClick={() => setIsShowingTranslation(!isShowingTranslation)}>{isShowingTranslation ? "Hide" : "Show"}</Button>
                <Button onClick={() => setIsShowingSentence(!isShowingSentence)}>Sentence</Button>
                <Button onClick={nextTranslation} isPrimary>Next</Button>
            </div>
        </Container>
    )
}
